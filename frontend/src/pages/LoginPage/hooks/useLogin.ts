import { Role } from '@common/models';
import { EMPLOYER_ROUTES, STUDENT_ROUTES } from '@common/navigation';
import { RequestStatus } from '@common/types/status';
import { useAuthStore } from '@store/auth';
import { useUsersStore } from '@store/users';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const [status, setStatus] = useState(RequestStatus.INITIAL);
    const [errorMessage, setErrorMessage] = useState('');

    const setCurrentUser = useAuthStore((state) => state.setCurrentUser);
    const users = useUsersStore((state) => state.users);
    const fetchUsers = useUsersStore((state) => state.fetchUsers);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const tryLoginHandler = useCallback(
        (phone: string) => {
            setErrorMessage('');
            setStatus(RequestStatus.LOADING);

            setTimeout(() => {
                const findUser = users.find((user) => user.phone === phone);

                if (!findUser) {
                    setErrorMessage('Пользователь не найден!');
                    setStatus(RequestStatus.ERROR);

                    return;
                }

                setCurrentUser(findUser);
                setStatus(RequestStatus.SUCCESS);

                findUser.role === Role.STUDENT
                    ? navigate(STUDENT_ROUTES.main)
                    : navigate(EMPLOYER_ROUTES.vacancies);
            }, 2000);
        },
        [navigate, setCurrentUser, users]
    );

    return {
        tryLoginHandler,
        status,
        errorMessage,
    };
};
