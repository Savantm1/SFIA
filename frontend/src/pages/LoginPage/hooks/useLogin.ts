import { RequestStatus } from '@common/types/status';
import { useAuthStore } from '@store/auth';
import { useUsersStore } from '@store/users';
import { useCallback, useEffect, useState } from 'react';

export const useLogin = () => {
    const [status, setStatus] = useState(RequestStatus.INITIAL);
    const [errorMessage, setErrorMessage] = useState('');

    const setCurrentUser = useAuthStore((state) => state.setCurrentUser);
    const users = useUsersStore((state) => state.users);
    const fetchUsers = useUsersStore((state) => state.fetchUsers);

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
            }, 2000);
        },
        [users]
    );

    return {
        tryLoginHandler,
        status,
        errorMessage,
    };
};
