import { EMPLOYER_ROUTES } from '@common/navigation/paths';
import BugIcon from '@ui/assets/iconComponents/BugIcon';
import DashBordIcon from '@ui/assets/iconComponents/DashBordIcon';
import PeopleIcon from '@ui/assets/iconComponents/PeopleIcon';
import PersonIcon from '@ui/assets/iconComponents/PersonIcon';

export const EMPLOYER_LINKS = [
    { icon: <DashBordIcon />, text: 'Главная', to: EMPLOYER_ROUTES.main },
    { icon: <BugIcon />, text: 'Мои Вакансии', to: EMPLOYER_ROUTES.vacancies },
    { icon: <PersonIcon />, text: 'Кандидаты', to: EMPLOYER_ROUTES.candidates },
    { icon: <PeopleIcon />, text: 'Моя команда', to: EMPLOYER_ROUTES.team },
];
