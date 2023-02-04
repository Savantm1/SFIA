import { Link } from '@bless-components/PageWrapperView/components/Sidebar/components/Link/Link';
import { EMPLOYER_LINKS } from '@common/navigation/links';
import { MAIN_ROUTES } from '@common/navigation/paths';
import LogoutIcon from '@ui/assets/iconComponents/LogoutIcon';
import logo from '@ui/assets/images/logo1.png';
import React, { FC, memo, useMemo } from 'react';

import { Styled } from './styled';

//посоветуй, куда можно это убрать ?
type SidebarProps = {
    links?: typeof EMPLOYER_LINKS;
};

export const Sidebar: FC<SidebarProps> = memo(({ links = EMPLOYER_LINKS }) => {
    const linkComponents = useMemo(() => {
        return links.map((link: any) => {
            return (
                <Link
                    to={link.to}
                    text={link.text}
                    icon={link.icon}
                    key={link.text}
                />
            );
        });
    }, [links]);
    return (
        <Styled.MainContainer>
            <Styled.LogoContainer>
                <Styled.Logo src={logo} alt="logo" />
            </Styled.LogoContainer>
            <Styled.LinksContainer>
                <Styled.MainLinksContainer>
                    {linkComponents}
                </Styled.MainLinksContainer>
                <Link
                    to={MAIN_ROUTES.logout}
                    text={'Выход'}
                    icon={<LogoutIcon />}
                />
            </Styled.LinksContainer>
        </Styled.MainContainer>
    );
});
