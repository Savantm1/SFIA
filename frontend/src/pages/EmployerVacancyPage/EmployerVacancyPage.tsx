import { useCurrentUser } from '@common/hooks/useCurrentUser';
import { Vacancy } from '@common/models';
import { EMPLOYER_ROUTES } from '@common/navigation';
import { CompanyInfoComponent } from '@pages/EmployerVacancyPage/components/CompanyInfoComponent/CompanyInfoComponent';
import { VacancyListComponent } from '@pages/EmployerVacancyPage/components/VacancyListComponent/VacancyListComponent';
import { Styled } from '@pages/EmployerVacancyPage/styled';
import { useVacanciesStore } from '@store/vacancies';
import { FC, memo, useCallback, useEffect } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

export const EmployerVacancyPage: FC = memo(() => {
    const vacancies = useVacanciesStore((state) => state.vacancies);
    const fetchVacancies = useVacanciesStore((state) => state.fetchVacancies);
    const user = useCurrentUser();
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

    useEffect(() => {
        if (user) {
            fetchVacancies(user.id);
        }
    }, [fetchVacancies, user]);

    if (!user) {
        return null;
    }

    return (
        <Styled.PageWrapper>
            <VacancyListComponent
                user={user}
                vacancies={vacancies}
                navigateVacancyHandler={navigateVacancyHandler}
            />

            <CompanyInfoComponent user={user} />
        </Styled.PageWrapper>
    );
});
