import { Role } from '@common/models';
import { EMPLOYER_ROUTES, STUDENT_ROUTES } from '@common/navigation';
import { RequestStatus } from '@common/types/status';
import { canCreateNewPerson } from '@pages/RegistrationPage/utils/canCreateNewPerson';
import { useAuthStore } from '@store/auth';
import {
    EmployerRegistrationData,
    useRegistrationStore,
} from '@store/registration';
import { useUsersStore } from '@store/users';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRegistration = (role: Role) => {
    const fetchUsers = useUsersStore((state) => state.fetchUsers);
    const users = useUsersStore((state) => state.users);
    const [status, setStatus] = useState(RequestStatus.INITIAL);

    const setCurrentUser = useAuthStore((state) => state.setCurrentUser);

    const createNewPerson = useRegistrationStore(
        (state) => state.createNewPerson
    );
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const registrationHandler = useCallback(
        async (currentData: any) => {
            createNewPerson(currentData);
            setStatus(RequestStatus.SUCCESS);
            setCurrentUser(currentData);
            role === Role.STUDENT
                ? navigate(STUDENT_ROUTES.main)
                : navigate(EMPLOYER_ROUTES.main);
        },
        [createNewPerson, navigate]
    );

    const errorHandler = useCallback(() => {
        alert('Такой пользователь уже существует');
        setStatus(RequestStatus.ERROR);
    }, []);

    const onSubmit = useCallback(
        (data: EmployerRegistrationData) => {
            setStatus(RequestStatus.LOADING);

            const currentData = {
                role,
                ...data,
            };

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const canCreate = canCreateNewPerson(users, data);
            setTimeout(() => {
                canCreate ? registrationHandler(currentData) : errorHandler();
            }, 2000);
        },
        [errorHandler, registrationHandler, users]
    );

    return { onSubmit, status };
};
