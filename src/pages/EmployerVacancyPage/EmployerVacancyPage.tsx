import { CompanyInfoComponent } from '@pages/EmployerVacancyPage/components/CompanyInfoComponent/CompanyInfoComponent';
import { VacancyListComponent } from '@pages/EmployerVacancyPage/components/VacancyListComponent/VacancyListComponent';
import { VacancyProfileComponent } from '@pages/EmployerVacancyPage/components/VacancyProfileComponent/VacancyProfileComponent';
import { useSelectVacancy } from '@pages/EmployerVacancyPage/hooks/useSelectVacancy';
import { Styled } from '@pages/EmployerVacancyPage/styled';
import { VacancyMiniCard } from '@scenarios/VacancyMiniCard';
import React, { FC, memo, useMemo } from 'react';

import { makeUserMock } from '../../mock-factory/User';
import { makeVacancyMock } from '../../mock-factory/Vacancy';

export const EmployerVacancyPage: FC = memo(() => {
    // Получили список вакансий
    const vacancies = [...Array(4).fill('')].map(() => {
        return makeVacancyMock();
    });
    // Получили текущего пользователя
    const user = makeUserMock();

    const { selectedVacancy, selectVacancyHandler } = useSelectVacancy();

    const vacancyList = useMemo(() => {
        return vacancies.map((vacancy) => {
            return (
                <VacancyMiniCard
                    key={vacancy.id}
                    vacancy={vacancy}
                    openVacancyProfileHandler={selectVacancyHandler(vacancy)}
                />
            );
        });
    }, [selectVacancyHandler, vacancies]);

    return (
        <Styled.PageWrapper>
            {selectedVacancy ? (
                <VacancyProfileComponent
                    vacancy={selectedVacancy}
                    closeVacancyProfileHandler={selectVacancyHandler(null)}
                />
            ) : (
                <VacancyListComponent vacancyList={vacancyList} />
            )}

            <CompanyInfoComponent user={user} />
        </Styled.PageWrapper>
    );
});
