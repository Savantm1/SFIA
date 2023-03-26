import { useCurrentUser } from '@common/hooks/useCurrentUser';
import { Role } from '@common/models';
import {
    EMPLOYER_ROUTES,
    MAIN_ROUTES,
    STUDENT_ROUTES,
} from '@common/navigation';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuthCheck = (forRole?: Role) => {
    const currentUser = useCurrentUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate(MAIN_ROUTES.login);
            return;
        }

        if (currentUser.role === Role.STUDENT && currentUser.role !== forRole) {
            navigate(STUDENT_ROUTES.main);
            return;
        }

        if (
            currentUser.role === Role.EMPLOYER &&
            currentUser.role !== forRole
        ) {
            navigate(EMPLOYER_ROUTES.vacancies);
            return;
        }
    }, [currentUser, forRole, navigate]);
};
