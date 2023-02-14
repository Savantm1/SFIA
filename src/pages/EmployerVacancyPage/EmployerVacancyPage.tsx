import { CompanyInfoComponent } from '@pages/EmployerVacancyPage/components/CompanyInfoComponent/CompanyInfoComponent';
import { VacancyListComponent } from '@pages/EmployerVacancyPage/components/VacancyListComponent/VacancyListComponent';
import { VacancyProfileComponent } from '@pages/EmployerVacancyPage/components/VacancyProfileComponent/VacancyProfileComponent';
import { useSelectVacancy } from '@pages/EmployerVacancyPage/hooks/useSelectVacancy';
import { Styled } from '@pages/EmployerVacancyPage/styled';
import React, { FC, memo } from 'react';

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

    return (
        <Styled.PageWrapper>
            {selectedVacancy ? (
                <VacancyProfileComponent
                    vacancy={selectedVacancy}
                    closeVacancyProfileHandler={selectVacancyHandler(null)}
                />
            ) : (
                <VacancyListComponent
                    vacancies={vacancies}
                    selectVacancyHandler={selectVacancyHandler}
                />
            )}

            <CompanyInfoComponent user={user} />
        </Styled.PageWrapper>
    );
});
