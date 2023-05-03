import ky from 'ky';
import { create } from 'zustand';

export interface StudentRegistrationData {
    firstName?: string;
    secondName?: string;
    studentPatronymic?: string;
    phone?: number;
    mail?: string;
    studentDescription?: string;
}

export interface EmployerRegistrationData {
    nameOrganization?: string;
    phone?: number;
    mail?: string;
    nameSite?: string;
    companyDescription?: string;
}

interface RegistrationState {
    createNewPerson: (
        data: StudentRegistrationData | EmployerRegistrationData
    ) => void;
}

export const useRegistrationStore = create<RegistrationState>()(() => ({
    createNewPerson: async (
        data: StudentRegistrationData | EmployerRegistrationData
    ) => {
        await ky.post(
            `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/users`,
            {
                json: {
                    ...data,
                },
            }
        );
    },
}));
