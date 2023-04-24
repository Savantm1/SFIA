import { PageWrapperView } from '@bless-components/PageWrapperView';
import { Role } from '@common/models';
import { EMPLOYER_LINKS, STUDENT_LINKS } from '@common/navigation/links';
import { EmployerCandidatesPage } from '@pages/EmployerCandidatesPage/EmployerCandidatesPage';
import { EmployerTeamPage } from '@pages/EmployerTeamPage';
import { EmployerVacancyPage } from '@pages/EmployerVacancyPage';
import { EmployerVacancyProfilePage } from '@pages/EmployerVacancyProfilePage/EmployerVacancyProfilePage';
import { LoginPage } from '@pages/LoginPage';
import { LogoutPage } from '@pages/LogoutPage';
import { MemberProfilePage } from '@pages/MemberProfilePage';
import { RegistrationPage } from '@pages/RegistrationPage';
import { SelectRegistrationPage } from '@pages/SelectRegistrationPage/SelectRegistrationPage';
import { StudentCoursesPage } from '@pages/StudentCoursesPage';
import { StudentMainPage } from '@pages/StudentMainPage';
import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { EMPLOYER_ROUTES, MAIN_ROUTES, STUDENT_ROUTES } from '../../paths';
export const Navigation = memo(() => {
    return (
        <Routes>
            <Route index path={MAIN_ROUTES.default} element={<LoginPage />} />
            <Route path={MAIN_ROUTES.login} element={<LoginPage />} />
            <Route path={MAIN_ROUTES.logout} element={<LogoutPage />} />
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
                    <PageWrapperView
                        forRole={Role.EMPLOYER}
                        links={EMPLOYER_LINKS}
                    />
                }
            >
                <Route
                    path={EMPLOYER_ROUTES.vacancies}
                    element={<EmployerVacancyPage />}
                />
                <Route
                    path={EMPLOYER_ROUTES.vacancy}
                    element={<EmployerVacancyProfilePage />}
                />
                <Route
                    path={EMPLOYER_ROUTES.team}
                    element={<EmployerTeamPage />}
                />
                <Route
                    path={EMPLOYER_ROUTES.member}
                    element={<MemberProfilePage />}
                />
                <Route
                    path={EMPLOYER_ROUTES.candidates}
                    element={<EmployerCandidatesPage />}
                />
            </Route>
            {/*students routes*/}
            <Route
                path={STUDENT_ROUTES.student}
                element={
                    <PageWrapperView
                        forRole={Role.STUDENT}
                        links={STUDENT_LINKS}
                    />
                }
            >
                <Route
                    path={STUDENT_ROUTES.main}
                    element={<StudentMainPage />}
                />
                {/*<Route*/}
                {/*    path={STUDENT_ROUTES.courses}*/}
                {/*    element={<StudentCoursesPage />}*/}
                {/*/>*/}
                <Route
                    path={STUDENT_ROUTES.coursesWithMember}
                    element={<StudentCoursesPage />}
                />
                {/*<Route*/}
                {/*    path={STUDENT_ROUTES.vacancies}*/}
                {/*    element={<>vacancies</>}*/}
                {/*/>*/}
            </Route>
        </Routes>
    );
});
