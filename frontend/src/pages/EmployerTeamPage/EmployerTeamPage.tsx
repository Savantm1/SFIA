import { useCurrentUser } from '@common/hooks/useCurrentUser';
import { Member } from '@common/models/Member';
import { EMPLOYER_ROUTES } from '@common/navigation';
import { CreateFormModal } from '@pages/EmployerTeamPage/components/CreateFormModal/CreateFormModal';
import { NoMemberComponent } from '@pages/EmployerTeamPage/components/NoMemberComponent/NoMemberComponent';
import { useModal } from '@pages/EmployerVacancyPage/hooks/useModal';
import { SkillsSelectionModal } from '@scenarios/SkillsSelectionModal';
import { TeamMemberMiniCard } from '@scenarios/TeamMemberMiniCard';
import { useMembersStore } from '@store/members';
import { StudentSkillType, useSkillsModalStore } from '@store/skillsModal';
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

    const resetAllSelections = useSkillsModalStore(
        (state) => state.resetAllSelections
    );

    const {
        isModalOpen: isSkillModalOpen,
        openModalHandler: openSkillModalHandler,
        closeModalHandler: closeSkillModalHandler,
    } = useModal();

    const [skills, setSkills] = useState<StudentSkillType[]>();

    const navigate = useNavigate();

    const navigateMemberHandler = useCallback(
        (id: Member['id']) => {
            return () => {
                navigate(
                    generatePath(EMPLOYER_ROUTES.member, {
                        id: id,
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

            await createMember({ ...data, skills, employerId: user.id });
            await fetchMembers(user.id);
        },
        [createMember, fetchMembers, skills, user]
    );

    const getDataHandler = useCallback((selectedData: StudentSkillType[]) => {
        setSkills(selectedData);

        return selectedData;
    }, []);

    if (!user) {
        return null;
    }

    return (
        <Styled.PageWrapper>
            <SkillsSelectionModal
                updatedModalData={[]}
                getDataHandler={getDataHandler}
                open={isSkillModalOpen}
                handleClose={closeSkillModalHandler}
            />

            <CreateFormModal
                selectedSkillTypes={skills}
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
                                setSkills([]);
                                resetAllSelections();
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
                            setSkills([]);
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
