import { EMPLOYER_ROUTES, STUDENT_ROUTES } from '@common/navigation/paths';
import BugIcon from '@ui/assets/iconComponents/BugIcon';
import DashBordIcon from '@ui/assets/iconComponents/DashBordIcon';
import PeopleIcon from '@ui/assets/iconComponents/PeopleIcon';
import PersonIcon from '@ui/assets/iconComponents/PersonIcon';

export const EMPLOYER_LINKS: LinksType = [
    { icon: <BugIcon />, text: 'Мои Вакансии', to: EMPLOYER_ROUTES.vacancies },
    { icon: <PersonIcon />, text: 'Кандидаты', to: EMPLOYER_ROUTES.candidates },
    { icon: <PeopleIcon />, text: 'Моя команда', to: EMPLOYER_ROUTES.team },
];

export const STUDENT_LINKS: LinksType = [
    { icon: <DashBordIcon />, text: 'Главная', to: STUDENT_ROUTES.main },
    // { icon: <FeaturedIcon />, text: 'Курсы', to: STUDENT_ROUTES.courses },
    // { icon: <BugIcon />, text: 'Вакансии', to: STUDENT_ROUTES.vacancies },
];

type LinkType = {
    icon: JSX.Element;
    text: string;
    to: STUDENT_ROUTES | EMPLOYER_ROUTES;
};

export type LinksType = LinkType[];
