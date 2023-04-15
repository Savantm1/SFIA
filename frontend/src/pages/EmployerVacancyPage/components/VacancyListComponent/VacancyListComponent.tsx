import { User, Vacancy } from '@common/models';
import { NoVacancyComponent } from '@pages/EmployerVacancyPage/components/NoVacancyComponent/NoVacancyComponent';
import { VacancyFormModal } from '@pages/EmployerVacancyPage/components/VacancyFormModal/VacancyFormModal';
import { useModal } from '@pages/EmployerVacancyPage/hooks/useModal';
import { SkillsSelectionModal } from '@scenarios/SkillsSelectionModal';
import { VacancyMiniCard } from '@scenarios/VacancyMiniCard';
import { StudentSkillType, useSkillsModalStore } from '@store/skillsModal';
import { useVacanciesStore } from '@store/vacancies';
import { Icons } from '@ui/assets/icons';
import { IconButton } from '@ui/components/IconButton/IconButton';
import { FC, memo, useCallback, useMemo, useState } from 'react';

import { Styled } from './styled';

type VacancyListComponentProps = {
    user: User;
    vacancies: Vacancy[];
    navigateVacancyHandler: (id: Vacancy['id']) => () => void;
};

export const VacancyListComponent: FC<VacancyListComponentProps> = memo(
    ({ user, vacancies, navigateVacancyHandler }) => {
        const { city, nameOrganization } = user;

        const fetchVacancies = useVacanciesStore(
            (state) => state.fetchVacancies
        );
        const updateVacancy = useVacanciesStore((state) => state.updateVacancy);
        const resetAllSelections = useSkillsModalStore(
            (state) => state.resetAllSelections
        );

        const [skillTypes, setSkillTypes] = useState<StudentSkillType[]>();

        const createVacancy = useVacanciesStore((state) => state.createVacancy);

        const { isModalOpen, openModalHandler, closeModalHandler } = useModal();
        const {
            isModalOpen: isSkillModalOpen,
            openModalHandler: openSkillModalHandler,
            closeModalHandler: closeSkillModalHandler,
        } = useModal();

        const vacancyList = useMemo(() => {
            return vacancies.slice(0, 4).map((vacancy) => {
                return (
                    <VacancyMiniCard
                        key={vacancy.id}
                        skillsGap={6}
                        city={city}
                        company={nameOrganization}
                        vacancy={vacancy}
                        openVacancyProfileHandler={() => {
                            updateVacancy(vacancy.id, {
                                ...vacancy,
                                views: (vacancy.views ?? 0) + 1,
                            });
                            navigateVacancyHandler(vacancy.id)();
                        }}
                    />
                );
            });
        }, [
            city,
            nameOrganization,
            navigateVacancyHandler,
            updateVacancy,
            vacancies,
        ]);

        const onFormSubmitHandler = useCallback(
            async (data: Partial<Vacancy>) => {
                await createVacancy({ ...data, skillTypes, userId: user.id });
                await fetchVacancies(user.id);
            },
            [createVacancy, fetchVacancies, skillTypes, user.id]
        );

        const getDataHandler = useCallback(
            (selectedData: StudentSkillType[]) => {
                setSkillTypes(selectedData);
                return selectedData;
            },
            []
        );

        return (
            <>
                <SkillsSelectionModal
                    updatedModalData={skillTypes}
                    getDataHandler={getDataHandler}
                    open={isSkillModalOpen}
                    handleClose={closeSkillModalHandler}
                />

                <VacancyFormModal
                    selectedSkillTypes={skillTypes}
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
                            onClick={() => {
                                setSkillTypes([]);
                                resetAllSelections();
                                openModalHandler();
                            }}
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
