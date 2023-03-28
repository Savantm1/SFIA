import { SkillType, User, Vacancy } from '@common/models';
import { NoVacancyComponent } from '@pages/EmployerVacancyPage/components/NoVacancyComponent/NoVacancyComponent';
import { VacancyFormModal } from '@pages/EmployerVacancyPage/components/VacancyFormModal/VacancyFormModal';
import { useModal } from '@pages/EmployerVacancyPage/hooks/useModal';
import { SkillsSelectionModal } from '@scenarios/SkillsSelectionModal';
import { VacancyMiniCard } from '@scenarios/VacancyMiniCard';
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

        const [skillTypes, setSkillTypes] = useState<SkillType[]>();

        const createVacancy = useVacanciesStore((state) => state.createVacancy);

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
                        company={nameOrganization}
                        vacancy={vacancy}
                        openVacancyProfileHandler={navigateVacancyHandler(
                            vacancy.id
                        )}
                    />
                );
            });
        }, [city, nameOrganization, navigateVacancyHandler, vacancies]);

        const onFormSubmitHandler = useCallback(
            async (data: Partial<Vacancy>) => {
                await createVacancy({ ...data, skillTypes, userId: user.id });
                await fetchVacancies(user.id);
            },
            [createVacancy, fetchVacancies, skillTypes, user.id]
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
                            value: Math.round(
                                ((item.value ?? 0) * 100) / item.max
                            ),
                        });
                    });
                });
            });

            setSkillTypes(skillTypes);

            return data;
        }, []);

        return (
            <>
                <SkillsSelectionModal
                    updatedModalData={[]}
                    getDataHandler={(data) => data}
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
