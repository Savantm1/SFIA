import { MAIN_ROUTES } from '@common/navigation';
import { RoleItem } from '@pages/SelectRegistrationPage/types';

export const SELECT_REGISTRATION_PAGE_MAP = {
    subtitleStudent: 'Хочу узнать свой уровень и повысить свои навыки',
    subtitleEmployer: 'Хочу узнать уровень своей команды',
};

export enum Roles {
    employer = 'employer',
    student = 'student',
}

export enum RolesName {
    employer = 'Работодатель',
    student = 'Студент',
}

export const SELECT_ROLES_CONFIG: RoleItem[] = [
    {
        role: Roles.student,
        link: MAIN_ROUTES.registrationStudent,
        title: RolesName.student,
        subtitle: SELECT_REGISTRATION_PAGE_MAP.subtitleStudent,
    },
    {
        role: Roles.employer,
        link: MAIN_ROUTES.registrationEmployer,
        title: RolesName.employer,
        subtitle: SELECT_REGISTRATION_PAGE_MAP.subtitleEmployer,
    },
];
