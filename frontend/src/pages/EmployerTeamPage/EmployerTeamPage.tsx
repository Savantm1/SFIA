import { User } from '@common/models';
import { STUDENT_ROUTES } from '@common/navigation';
import { CreateFormModal } from '@pages/EmployerTeamPage/components/CreateFormModal/CreateFormModal';
import { NoMemberComponent } from '@pages/EmployerTeamPage/components/NoMemberComponent/NoMemberComponent';
import { useModal } from '@pages/EmployerVacancyPage/hooks/useModal';
import { ModalContainer } from '@scenarios/SkillsSelectionModal/components/ModalContainer/ModalContainer';
import { TeamMemberMiniCard } from '@scenarios/TeamMemberMiniCard';
import { Icons } from '@ui/assets/icons';
import { Avatar } from '@ui/components/Avatar';
import { FC, memo, useCallback, useMemo } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

import { makeStudentMock } from '../../mock-factory/makeStudentMock';
import { makeUserMock } from '../../mock-factory/User';
import { Styled } from './styled';

export const EmployerTeamPage: FC = memo(() => {
    // Получили список сотрудников
    const members = [...Array(10).fill('')].map(() => {
        return makeStudentMock();
    });
    // Получили текущего пользователя
    const user = makeUserMock();

    const { isModalOpen, openModalHandler, closeModalHandler } = useModal();

    const {
        isModalOpen: isSkillModalOpen,
        openModalHandler: openSkillModalHandler,
        closeModalHandler: closeSkillModalHandler,
    } = useModal();

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
                    user={member}
                    openMemberProfileHandler={navigateMemberHandler(member.id)}
                />
            );
        });
    }, [members]);

    const onFormSubmitHandler = useCallback(
        (data: any) =>
            alert(`Member created success. Data: ${JSON.stringify(data)}`),
        []
    );

    return (
        <Styled.PageWrapper>
            <ModalContainer
                open={isSkillModalOpen}
                handleClose={closeSkillModalHandler}
            />

            <CreateFormModal
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
                            onClick={openModalHandler}
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
                    <NoMemberComponent createMemberHandler={openModalHandler} />
                ) : (
                    <Styled.MemberListWrapper>
                        {memberList}
                    </Styled.MemberListWrapper>
                )}
            </Styled.Wrapper>
        </Styled.PageWrapper>
    );
});
