import { useCurrentUser } from '@common/hooks/useCurrentUser';
import { useGoBack } from '@common/navigation/hooks/useGoBack';
import { MemberFormModal } from '@pages/EmployerTeamPage/components/MemberFormModal/MemberFormModal';
import { useMenu } from '@pages/EmployerVacancyProfilePage/hooks/useMenu';
import { useModal } from '@pages/EmployerVacancyProfilePage/hooks/useModal';
import { LeftSideContent } from '@pages/MemberProfilePage/components/LeftSideContent/LeftSideContent';
import { MemberDeleteModal } from '@pages/MemberProfilePage/components/MemberDeleteModal/MemberDeleteModal';
import { RightSideContent } from '@pages/MemberProfilePage/components/RightSideContent/RightSideContent';
import { WelcomeTitle } from '@pages/MemberProfilePage/components/WelcomeTitle/WelcomeTitle';
import { WELCOME_BLOCK_SUBTITLES } from '@pages/StudentMainPage/components/WelcomeTitle/constants';
import { SkillsSelectionModal } from '@scenarios/SkillsSelectionModal';
import { useMembersStore } from '@store/members';
import { StudentSkillType } from '@store/skillsModal';
import { Icons } from '@ui/assets/icons';
import { FC, memo, useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Styled } from './styled';

export const MemberProfilePage: FC = memo(() => {
    const { id = '' } = useParams();
    const currentUser = useCurrentUser();
    const currentMember = useMembersStore((state) => state.currentMember);
    const getMemberById = useMembersStore((state) => state.getMemberById);
    const updateMember = useMembersStore((state) => state.updateMember);
    const deleteMember = useMembersStore((state) => state.deleteMember);

    const [skills, setSkills] = useState<StudentSkillType[]>();

    const { isModalOpen, openModalHandler, closeModalHandler } = useModal();
    const {
        isModalOpen: isDeleteModalOpen,
        openModalHandler: openDeleteModalHandler,
        closeModalHandler: closeDeleteModalHandler,
    } = useModal();

    const {
        isModalOpen: isSkillModalOpen,
        openModalHandler: openSkillModalHandler,
        closeModalHandler: closeSkillModalHandler,
    } = useModal();

    const { anchorEl, isMenuOpen, anchorClickHandler, closeMenuHandler } =
        useMenu();

    const onFormSubmitHandler = useCallback(
        async (data: any) => {
            if (!currentMember || !currentUser) {
                return;
            }
            await updateMember(currentMember.id, {
                ...currentMember,
                ...data,
                skills,
                employerId: currentUser.id,
            });
            await getMemberById(id);
        },
        [currentMember, currentUser, getMemberById, id, skills, updateMember]
    );

    const getDataHandler = useCallback((selectedData: StudentSkillType[]) => {
        setSkills(selectedData);

        return selectedData;
    }, []);

    useEffect(() => {
        getMemberById(id);
    }, [getMemberById, id]);

    useEffect(() => {
        if (currentMember) {
            setSkills(currentMember.skills);
        }
    }, [currentMember]);

    const goBack = useGoBack();

    if (!currentMember || !currentUser) {
        return null;
    }

    return (
        <Styled.PageWrapper>
            <SkillsSelectionModal
                updatedModalData={skills}
                getDataHandler={getDataHandler}
                open={isSkillModalOpen}
                handleClose={closeSkillModalHandler}
            />

            <MemberFormModal
                selectedSkillTypes={skills}
                isOpen={isModalOpen}
                onCloseHandler={closeModalHandler}
                openSkillModalHandler={openSkillModalHandler}
                onFormSubmitHandler={onFormSubmitHandler}
                member={currentMember}
            />

            <MemberDeleteModal
                isOpen={isDeleteModalOpen}
                deleteMemberHandler={() => {
                    currentMember && deleteMember(currentMember.id);
                    goBack();
                }}
                closeModalHandler={() => {
                    closeDeleteModalHandler();
                    closeMenuHandler();
                }}
            />

            <Styled.LeftSide>
                <Styled.HeaderWrapper>
                    <Styled.PageTitle variant={'h1'} align={'left'}>
                        Рекомендованные курсы
                    </Styled.PageTitle>
                    <Styled.MenuButton
                        id="basic-button"
                        iconName={Icons.menu}
                        aria-controls={isMenuOpen ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={isMenuOpen ? 'true' : undefined}
                        onClick={anchorClickHandler as VoidFunction}
                    />
                    <Styled.Menu
                        id="basic-menu"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        anchorEl={anchorEl}
                        open={isMenuOpen}
                        onClose={closeMenuHandler}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <Styled.MenuItem
                            onClick={() => {
                                setSkills(
                                    currentMember ? currentMember.skills : []
                                );
                                openModalHandler();
                                closeMenuHandler();
                            }}
                        >
                            Редактировать
                        </Styled.MenuItem>
                        <Styled.MenuItem onClick={openDeleteModalHandler}>
                            Удалить
                        </Styled.MenuItem>
                    </Styled.Menu>
                </Styled.HeaderWrapper>
                <WelcomeTitle subtitle={WELCOME_BLOCK_SUBTITLES.second} />
                <LeftSideContent variant={'2'} />
            </Styled.LeftSide>
            <Styled.RightSide>
                <RightSideContent user={currentUser} member={currentMember} />
            </Styled.RightSide>
        </Styled.PageWrapper>
    );
});
