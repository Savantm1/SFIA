import { useGoBack } from '@common/navigation/hooks/useGoBack';
import { formatAmount } from '@pages/EmployerVacancyPage/utils/formatAmount';
import { CompanyInfoComponent } from '@pages/EmployerVacancyProfilePage/components/CompanyInfoComponent/CompanyInfoComponent';
import { InfoList } from '@pages/EmployerVacancyProfilePage/components/InfoList/InfoList';
import { VacancyDeleteModal } from '@pages/EmployerVacancyProfilePage/components/VacancyDeleteModal/VacancyDeleteModal';
import { VacancyFormModal } from '@pages/EmployerVacancyProfilePage/components/VacancyFormModal/VacancyFormModal';
import { useMenu } from '@pages/EmployerVacancyProfilePage/hooks/useMenu';
import { useModal } from '@pages/EmployerVacancyProfilePage/hooks/useModal';
import { ModalContainer } from '@scenarios/SkillsSelectionModal/components/ModalContainer/ModalContainer';
import { Icons } from '@ui/assets/icons';
import image from '@ui/assets/images/phone.png';
import React, { FC, memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { makeUserMock } from '../../mock-factory/User';
import { makeVacancyMock } from '../../mock-factory/Vacancy';
import { Styled as StyledInfo } from './components/InfoList/styled';
import { Styled } from './styled';

export const EmployerVacancyProfilePage: FC = memo(() => {
    // Получили текущего пользователя
    const user = makeUserMock();

    // Получили вакансию по id из url
    const id = useParams();
    const vacancy = makeVacancyMock();

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

    return (
        <Styled.PageWrapper>
            <Styled.Wrapper>
                <ModalContainer
                    open={isSkillModalOpen}
                    handleClose={closeSkillModalHandler}
                />

                <VacancyFormModal
                    isOpen={isModalOpen}
                    onCloseHandler={closeModalHandler}
                    openSkillModalHandler={openSkillModalHandler}
                    onFormSubmitHandler={onFormSubmitHandler}
                    vacancy={vacancy}
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
                        <Styled.Title>{vacancy.title}</Styled.Title>
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
                            {formatAmount(+vacancy.salary)} р до вычета налога
                        </Styled.BigText>
                        <Styled.Text>
                            Опыт: {vacancy.experience} лет
                        </Styled.Text>
                        <Styled.Text>
                            Занятость: {vacancy.employment}
                        </Styled.Text>
                        <Styled.Text>График: {vacancy.schedule}</Styled.Text>
                    </Styled.TextInfoWrapper>
                    <Styled.Image src={image}></Styled.Image>
                </Styled.GeneralInfoWrapper>

                <Styled.Text>{vacancy.fullDescription}</Styled.Text>

                <StyledInfo.Title>{'Навыки:'}</StyledInfo.Title>
                <Styled.ProgressBar items={vacancy.skillTypes} isBig={true} />

                <InfoList
                    title={'Обязанности:'}
                    list={vacancy.responsibilities.split(';')}
                />
                <InfoList
                    title={'Требования:'}
                    list={vacancy.requirements.split(';')}
                />
                <InfoList
                    title={'Условия:'}
                    list={vacancy.conditions.split(';')}
                />
            </Styled.Wrapper>

            <CompanyInfoComponent user={user} />
        </Styled.PageWrapper>
    );
});
