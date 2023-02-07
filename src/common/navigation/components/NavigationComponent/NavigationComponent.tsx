import { PageWrapperView } from '@bless-components/PageWrapperView';
import { EmployerVacancyPage } from '@pages/EmployerVacancyPage';
import { LoginPage } from '@pages/LoginPage';
import { RegistrationPage } from '@pages/RegistrationPage';
import { SelectRegistrationPage } from '@pages/SelectRegistrationPage/SelectRegistrationPage';
import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { EMPLOYER_ROUTES, MAIN_ROUTES } from '../../paths';
export const Navigation = memo(() => {
    return (
        <Routes>
            <Route index path={MAIN_ROUTES.default} element={<LoginPage />} />
            <Route path={MAIN_ROUTES.login} element={<LoginPage />} />
            <Route
                path={MAIN_ROUTES.registration}
                element={<SelectRegistrationPage />}
            />
            <Route
                path={MAIN_ROUTES.registrationStudent}
                element={<RegistrationPage.student />}
            />
            <Route
                path={MAIN_ROUTES.registrationEmployer}
                element={<RegistrationPage.employer />}
            />
            <Route
                path={EMPLOYER_ROUTES.employer}
                element={<PageWrapperView />}
            >
                <Route path={EMPLOYER_ROUTES.main} element={<>main</>} />
                <Route
                    path={EMPLOYER_ROUTES.vacancies}
                    element={<EmployerVacancyPage />}
                />
                <Route path={EMPLOYER_ROUTES.team} element={<>team</>} />
                <Route
                    path={EMPLOYER_ROUTES.candidates}
                    element={<>candidates</>}
                />
            </Route>
        </Routes>
    );
});
