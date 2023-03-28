import { useCurrentUser } from '@common/hooks/useCurrentUser';
import { SkillType, User } from '@common/models';
import { Member } from '@common/models/Member';
import { STUDENT_ROUTES } from '@common/navigation';
import { CreateFormModal } from '@pages/EmployerTeamPage/components/CreateFormModal/CreateFormModal';
import { NoMemberComponent } from '@pages/EmployerTeamPage/components/NoMemberComponent/NoMemberComponent';
import { useModal } from '@pages/EmployerVacancyPage/hooks/useModal';
import { SkillsSelectionModal } from '@scenarios/SkillsSelectionModal';
import { TeamMemberMiniCard } from '@scenarios/TeamMemberMiniCard';
import { useMembersStore } from '@store/members';
import { Icons } from '@ui/assets/icons';
import { Avatar } from '@ui/components/Avatar';
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

import { Styled } from './styled';

export const EmployerTeamPage: FC = memo(() => {
    const members = useMembersStore((state) => state.members);
    const fetchMembers = useMembersStore((state) => state.fetchMembers);
    const createMember = useMembersStore((state) => state.createMember);

    const user = useCurrentUser();

    useEffect(() => {
        user && fetchMembers(user.id);
    }, [fetchMembers, user]);

    const { isModalOpen, openModalHandler, closeModalHandler } = useModal();

    const {
        isModalOpen: isSkillModalOpen,
        openModalHandler: openSkillModalHandler,
        closeModalHandler: closeSkillModalHandler,
    } = useModal();

    const [skillTypes, setSkillTypes] = useState<SkillType[]>();

    const navigate = useNavigate();

    const navigateMemberHandler = useCallback(
        (id: User['id']) => {
            return () => {
                navigate(
                    generatePath(STUDENT_ROUTES.coursesWithMember, {
                        memberId: id,
                    })
                );
            };
        },
        [navigate]
    );

    const memberList = useMemo(() => {
        return members.map((member) => {
            return (
                <TeamMemberMiniCard
                    key={member.id}
                    member={member}
                    openMemberProfileHandler={navigateMemberHandler(member.id)}
                />
            );
        });
    }, [members, navigateMemberHandler]);

    const onFormSubmitHandler = useCallback(
        async (data: Partial<Member>) => {
            if (!user) {
                return;
            }

            await createMember({ ...data, skillTypes, employerId: user.id });
            await fetchMembers(user.id);
        },
        [createMember, fetchMembers, skillTypes, user]
    );

    // TODO: обсудить расчет value в %
    const getDataHandler = useCallback((data: InitialModalDataType) => {
        const skillTypes: SkillType[] = [];

        data.forEach((dataItem) => {
            dataItem.subCategories.forEach((subCategory) => {
                subCategory.items.forEach((item) => {
                    skillTypes.push({
                        title: subCategory.subcategoryTitle
                            .slice(0, 3)
                            .toUpperCase(),
                        subtitle: '' + item.value + ' ур',
                        color: dataItem.mainColor,
                        value: Math.round(((item.value ?? 0) * 100) / item.max),
                    });
                });
            });
        });

        setSkillTypes(skillTypes);

        return data;
    }, []);

    if (!user) {
        return null;
    }

    return (
        <Styled.PageWrapper>
            <SkillsSelectionModal
                updatedModalData={[]}
                getDataHandler={(data) => data}
                open={isSkillModalOpen}
                handleClose={closeSkillModalHandler}
            />

            <CreateFormModal
                selectedSkillTypes={skillTypes}
                isOpen={isModalOpen}
                onCloseHandler={closeModalHandler}
                onFormSubmitHandler={onFormSubmitHandler}
                openSkillModalHandler={openSkillModalHandler}
            />

            <Styled.Wrapper>
                <Styled.HeaderWrapper>
                    <Styled.Title>Моя команда</Styled.Title>
                    <Styled.ToolbarWrapper>
                        <Styled.PlusButton
                            iconName={Icons.add}
                            onClick={() => {
                                setSkillTypes([]);
                                openModalHandler();
                            }}
                        />
                        <Styled.AvatarWrapper>
                            <Styled.InfoWrapper>
                                <Styled.InfoCompany>
                                    {user.nameOrganization}
                                </Styled.InfoCompany>
                                <Styled.InfoPhone>
                                    {user.phone}
                                </Styled.InfoPhone>
                            </Styled.InfoWrapper>
                            <Avatar role={user.role} size={'md'} />
                        </Styled.AvatarWrapper>
                    </Styled.ToolbarWrapper>
                </Styled.HeaderWrapper>

                {!memberList.length ? (
                    <NoMemberComponent
                        createMemberHandler={() => {
                            setSkillTypes([]);
                            openModalHandler();
                        }}
                    />
                ) : (
                    <Styled.MemberListWrapper>
                        {memberList}
                    </Styled.MemberListWrapper>
                )}
            </Styled.Wrapper>
        </Styled.PageWrapper>
    );
});
