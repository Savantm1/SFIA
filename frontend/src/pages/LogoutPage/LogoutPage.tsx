import { MAIN_ROUTES } from '@common/navigation';
import { useAuthStore } from '@store/auth';
import { FC, memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const LogoutPage: FC = memo(() => {
    const setCurrentUser = useAuthStore((state) => state.setCurrentUser);
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentUser(null);
        navigate(MAIN_ROUTES.login);
    }, [navigate, setCurrentUser]);

    return null;
});
