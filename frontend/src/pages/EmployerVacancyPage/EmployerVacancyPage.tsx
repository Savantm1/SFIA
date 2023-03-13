import { Vacancy } from '@common/models';
import { EMPLOYER_ROUTES } from '@common/navigation';
import { CompanyInfoComponent } from '@pages/EmployerVacancyPage/components/CompanyInfoComponent/CompanyInfoComponent';
import { VacancyListComponent } from '@pages/EmployerVacancyPage/components/VacancyListComponent/VacancyListComponent';
import { Styled } from '@pages/EmployerVacancyPage/styled';
import { FC, memo, useCallback } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

import { makeUserMock } from '../../mock-factory/User';
import { makeVacancyMock } from '../../mock-factory/Vacancy';

export const EmployerVacancyPage: FC = memo(() => {
    // Получили список вакансий
    const vacancies = [...Array(4).fill('')].map(() => {
        return makeVacancyMock();
    });
    // Получили текущего пользователя
    const user = makeUserMock();

    const navigate = useNavigate();

    const navigateVacancyHandler = useCallback(
        (id: Vacancy['id']) => {
            return () => {
                navigate(
                    generatePath(EMPLOYER_ROUTES.vacancy, {
                        id,
                    })
                );
            };
        },
        [navigate]
    );

    return (
        <Styled.PageWrapper>
            <VacancyListComponent
                vacancies={vacancies}
                navigateVacancyHandler={navigateVacancyHandler}
            />

            <CompanyInfoComponent user={user} />
        </Styled.PageWrapper>
    );
});
