import { Role } from '@common/models';
import { MAIN_ROUTES } from '@common/navigation';
import { RoleItem } from '@pages/SelectRegistrationPage/types';

export const SELECT_ROLES_CONFIG: RoleItem[] = [
    {
        role: Role.STUDENT,
        link: MAIN_ROUTES.registrationStudent,
        title: 'Студент',
        subtitle: 'Хочу узнать свой уровень и повысить свои навыки',
    },
    {
        role: Role.EMPLOYER,
        link: MAIN_ROUTES.registrationEmployer,
        title: 'Работодатель',
        subtitle: 'Хочу узнать уровень своей команды',
    },
];
