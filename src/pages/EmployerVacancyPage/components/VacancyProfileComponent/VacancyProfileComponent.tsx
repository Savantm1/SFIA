import { Vacancy } from '@common/models';
import { VacancyFormModal } from '@pages/EmployerVacancyPage/components/VacancyFormModal/VacancyFormModal';
import { InfoList } from '@pages/EmployerVacancyPage/components/VacancyProfileComponent/components/InfoList/InfoList';
import { useMenu } from '@pages/EmployerVacancyPage/hooks/useMenu';
import { useModal } from '@pages/EmployerVacancyPage/hooks/useModal';
import { formatAmount } from '@pages/EmployerVacancyPage/utils/formatAmount';
import { ModalContainer } from '@scenarios/SkillsSelectionModal/components/ModalContainer/ModalContainer';
import { Icons } from '@ui/assets/icons';
import image from '@ui/assets/images/phone.png';
import React, { FC, memo, useCallback } from 'react';

import { Styled } from './styled';

type VacancyProfileComponentProps = {
    vacancy: Vacancy;
    closeVacancyProfileHandler: VoidFunction;
};

export const VacancyProfileComponent: FC<VacancyProfileComponentProps> = memo(
    ({ vacancy, closeVacancyProfileHandler }) => {
        const { isModalOpen, openModalHandler, closeModalHandler } = useModal();
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

        return (
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

                <Styled.HeaderWrapper>
                    <Styled.TitleWrapper>
                        <Styled.BackButton
                            iconName={Icons.backBlack}
                            onClick={closeVacancyProfileHandler}
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
                        <Styled.MenuItem onClick={() => {}}>
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
        );
    }
);
