import { useCurrentUser } from '@common/hooks/useCurrentUser';
import { useGoBack } from '@common/navigation/hooks/useGoBack';
import { CompanyInfoComponent } from '@pages/EmployerVacancyPage/components/CompanyInfoComponent/CompanyInfoComponent';
import { formatAmount } from '@pages/EmployerVacancyPage/utils/formatAmount';
import { InfoList } from '@pages/EmployerVacancyProfilePage/components/InfoList/InfoList';
import { VacancyDeleteModal } from '@pages/EmployerVacancyProfilePage/components/VacancyDeleteModal/VacancyDeleteModal';
import { VacancyFormModal } from '@pages/EmployerVacancyProfilePage/components/VacancyFormModal/VacancyFormModal';
import { useMenu } from '@pages/EmployerVacancyProfilePage/hooks/useMenu';
import { useModal } from '@pages/EmployerVacancyProfilePage/hooks/useModal';
import { SkillsSelectionModal } from '@scenarios/SkillsSelectionModal';
import { useSkillsModalStore } from '@store/skillsModal';
import { useVacanciesStore } from '@store/vacancies';
import { Icons } from '@ui/assets/icons';
import image from '@ui/assets/images/phone.png';
import { FC, memo, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Styled as StyledInfo } from './components/InfoList/styled';
import { Styled } from './styled';

export const EmployerVacancyProfilePage: FC = memo(() => {
    const skillsData = useSkillsModalStore((state) => state.initialModalData);
    const { id = '' } = useParams();
    const user = useCurrentUser();
    const currentVacancy = useVacanciesStore((state) => state.currentVacancy);
    const getVacancyById = useVacanciesStore((state) => state.getVacancyById);

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
        (data: any) =>
            alert(`Vacancy updated success. Data: ${JSON.stringify(data)}`),
        []
    );

    const goBack = useGoBack();

    useEffect(() => {
        getVacancyById(id);
    }, [getVacancyById, id]);

    if (!user || !currentVacancy) {
        return null;
    }

    return (
        <Styled.PageWrapper>
            <Styled.Wrapper>
                <SkillsSelectionModal
                    updatedModalData={[]}
                    getDataHandler={(data) => data}
                    open={isSkillModalOpen}
                    handleClose={closeSkillModalHandler}
                />

                <VacancyFormModal
                    isOpen={isModalOpen}
                    onCloseHandler={closeModalHandler}
                    openSkillModalHandler={openSkillModalHandler}
                    onFormSubmitHandler={onFormSubmitHandler}
                    vacancy={currentVacancy}
                />

                <VacancyDeleteModal
                    isOpen={isDeleteModalOpen}
                    deleteVacancyHandler={goBack}
                    closeModalHandler={() => {
                        closeDeleteModalHandler();
                        closeMenuHandler();
                    }}
                />

                <Styled.HeaderWrapper>
                    <Styled.TitleWrapper>
                        <Styled.BackButton
                            iconName={Icons.backBlack}
                            onClick={goBack}
                        />
                        <Styled.Title>{currentVacancy.title}</Styled.Title>
                    </Styled.TitleWrapper>
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

                <Styled.GeneralInfoWrapper>
                    <Styled.TextInfoWrapper>
                        <Styled.BigText>
                            {formatAmount(+currentVacancy.salary)} р до вычета
                            налога
                        </Styled.BigText>
                        <Styled.Text>
                            Опыт: {currentVacancy.experience} лет
                        </Styled.Text>
                        <Styled.Text>
                            Занятость: {currentVacancy.employment}
                        </Styled.Text>
                        <Styled.Text>
                            График: {currentVacancy.schedule}
                        </Styled.Text>
                    </Styled.TextInfoWrapper>
                    <Styled.Image src={image}></Styled.Image>
                </Styled.GeneralInfoWrapper>

                <Styled.Text>{currentVacancy.fullDescription}</Styled.Text>

                <StyledInfo.Title>{'Навыки:'}</StyledInfo.Title>
                <Styled.ProgressBar
                    items={currentVacancy.skillTypes}
                    isBig={true}
                />

                <InfoList
                    title={'Обязанности:'}
                    list={currentVacancy.responsibilities.split(';')}
                />
                <InfoList
                    title={'Требования:'}
                    list={currentVacancy.requirements.split(';')}
                />
                <InfoList
                    title={'Условия:'}
                    list={currentVacancy.conditions.split(';')}
                />
            </Styled.Wrapper>

            <CompanyInfoComponent user={user} />
        </Styled.PageWrapper>
    );
});
