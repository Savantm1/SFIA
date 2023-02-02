import { Styled } from '@bless-components/PageWrapperView/styled';
import { EMPLOYER_ROUTES } from '@common/navigation';
import { Sidebar } from '@common/navigation/components/Sidebar';
import BugIcon from '@ui/assets/iconComponents/BugIcon';
import DashBordIcon from '@ui/assets/iconComponents/DashBordIcon';
import PeopleIcon from '@ui/assets/iconComponents/PeopleIcon';
import PersonIcon from '@ui/assets/iconComponents/PersonIcon';
import React, { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';
export const EMPLOYER_LINKS = [
    { icon: <DashBordIcon />, text: 'Главная', to: EMPLOYER_ROUTES.main },
    { icon: <BugIcon />, text: 'Мои Вакансии', to: EMPLOYER_ROUTES.vacancies },
    { icon: <PersonIcon />, text: 'Кандидаты', to: EMPLOYER_ROUTES.candidates },
    { icon: <PeopleIcon />, text: 'Моя команда', to: EMPLOYER_ROUTES.team },
];
export const PageWrapperView: FC = memo(() => {
    return (
        <Styled.MainWrapper>
            <Sidebar links={EMPLOYER_LINKS} />
            <Styled.ContentWrapper>
                <Outlet />
            </Styled.ContentWrapper>
        </Styled.MainWrapper>
    );
});
