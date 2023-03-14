import { User, Vacancy } from '@common/models';
import { NoVacancyComponent } from '@pages/EmployerVacancyPage/components/NoVacancyComponent/NoVacancyComponent';
import { VacancyFormModal } from '@pages/EmployerVacancyPage/components/VacancyFormModal/VacancyFormModal';
import { useModal } from '@pages/EmployerVacancyPage/hooks/useModal';
import { ModalContainer } from '@scenarios/SkillsSelectionModal/components/ModalContainer/ModalContainer';
import { VacancyMiniCard } from '@scenarios/VacancyMiniCard';
import { Icons } from '@ui/assets/icons';
import { IconButton } from '@ui/components/IconButton/IconButton';
import { FC, memo, useCallback, useMemo } from 'react';

import { Styled } from './styled';

type VacancyListComponentProps = {
    city: User['city'];
    company: User['nameOrganization'];
    vacancies: Vacancy[];
    navigateVacancyHandler: (id: Vacancy['id']) => () => void;
};

export const VacancyListComponent: FC<VacancyListComponentProps> = memo(
    ({ city, company, vacancies, navigateVacancyHandler }) => {
        const { isModalOpen, openModalHandler, closeModalHandler } = useModal();
        const {
            isModalOpen: isSkillModalOpen,
            openModalHandler: openSkillModalHandler,
            closeModalHandler: closeSkillModalHandler,
        } = useModal();

        const vacancyList = useMemo(() => {
            return vacancies.map((vacancy) => {
                return (
                    <VacancyMiniCard
                        key={vacancy.id}
                        city={city}
                        company={company}
                        vacancy={vacancy}
                        openVacancyProfileHandler={navigateVacancyHandler(
                            vacancy.id
                        )}
                    />
                );
            });
        }, [navigateVacancyHandler, vacancies]);

        const onFormSubmitHandler = useCallback(
            (data: any) =>
                alert(`Vacancy created success. Data: ${JSON.stringify(data)}`),
            []
        );

        return (
            <>
                <ModalContainer
                    open={isSkillModalOpen}
                    handleClose={closeSkillModalHandler}
                />

                <VacancyFormModal
                    isOpen={isModalOpen}
                    onCloseHandler={closeModalHandler}
                    openSkillModalHandler={openSkillModalHandler}
                    onFormSubmitHandler={onFormSubmitHandler}
                />

                <Styled.Wrapper>
                    <Styled.HeaderWrapper>
                        <Styled.Title>Мои вакансии</Styled.Title>
                        <IconButton
                            iconName={Icons.add}
                            onClick={openModalHandler}
                        />
                    </Styled.HeaderWrapper>

                    {!vacancyList.length ? (
                        <NoVacancyComponent
                            createVacancyHandler={openModalHandler}
                        />
                    ) : (
                        <Styled.VacancyListWrapper>
                            {vacancyList}
                        </Styled.VacancyListWrapper>
                    )}
                </Styled.Wrapper>
            </>
        );
    }
);
