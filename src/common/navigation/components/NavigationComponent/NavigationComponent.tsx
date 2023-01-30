import { LoginPage } from '@pages/LoginPage';
import { SelectRegistrationPage } from '@pages/SelectRegistrationPage/SelectRegistrationPage';
import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MAIN_ROUTES } from '../../paths';
export const Navigation = memo(() => {
    return (
        <Routes>
            <Route path={MAIN_ROUTES.default} element={<LoginPage />} />
            <Route path={MAIN_ROUTES.login} element={<LoginPage />} />
            <Route
                path={MAIN_ROUTES.registration}
                element={<SelectRegistrationPage />}
            />
        </Routes>
    );
});
