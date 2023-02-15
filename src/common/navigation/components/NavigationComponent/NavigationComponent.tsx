import { PageWrapperView } from '@bless-components/PageWrapperView';
import {
    EMPLOYER_LINKS,
    LinksType,
    STUDENT_LINKS,
} from '@common/navigation/links';
import { EmployerCandidatesPage } from '@pages/EmployerCandidatesPage/EmployerCandidatesPage';
import { EmployerTeamPage } from '@pages/EmployerTeamPage';
import { EmployerVacancyPage } from '@pages/EmployerVacancyPage';
import { LoginPage } from '@pages/LoginPage';
import { RegistrationPage } from '@pages/RegistrationPage';
import { SelectRegistrationPage } from '@pages/SelectRegistrationPage/SelectRegistrationPage';
import { StudentMainPage } from '@pages/StudentMainPage';
import React, { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { EMPLOYER_ROUTES, MAIN_ROUTES, STUDENT_ROUTES } from '../../paths';
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
            {/*employer routes*/}
            <Route
                path={EMPLOYER_ROUTES.employer}
                element={
                    <PageWrapperView links={EMPLOYER_LINKS as LinksType} />
                }
            >
                <Route path={EMPLOYER_ROUTES.main} element={<>main</>} />
                <Route
                    path={EMPLOYER_ROUTES.vacancies}
                    element={<EmployerVacancyPage />}
                />
                <Route
                    path={EMPLOYER_ROUTES.team}
                    element={<EmployerTeamPage />}
                />
                <Route
                    path={EMPLOYER_ROUTES.candidates}
                    element={<EmployerCandidatesPage />}
                />
            </Route>
            {/*students routes*/}
            <Route
                path={STUDENT_ROUTES.student}
                element={<PageWrapperView links={STUDENT_LINKS as LinksType} />}
            >
                <Route
                    path={STUDENT_ROUTES.main}
                    element={<StudentMainPage />}
                />
                <Route path={STUDENT_ROUTES.courses} element={<>courses</>} />
                <Route
                    path={STUDENT_ROUTES.vacancies}
                    element={<>vacancies</>}
                />
            </Route>
        </Routes>
    );
});
