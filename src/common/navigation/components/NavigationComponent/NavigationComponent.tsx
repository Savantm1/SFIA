import { PageWrapperView } from '@bless-components/PageWrapperView';
import { LoginPage } from '@pages/LoginPage';
import { RegistrationPage } from '@pages/RegistrationPage';
import { SelectRegistrationPage } from '@pages/SelectRegistrationPage/SelectRegistrationPage';
import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MAIN_ROUTES } from '../../paths';
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
            <Route path={'/employee'} element={<PageWrapperView />}>
                <Route path={'/employee/main'} element={<>main</>} />
            </Route>
        </Routes>
    );
});
