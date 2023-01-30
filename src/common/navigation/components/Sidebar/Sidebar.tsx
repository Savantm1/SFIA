import { FC, memo, useMemo } from 'react';
import { Link } from 'react-router-dom';

import { MAIN_ROUTES } from '../../paths';
import { Styled } from './styled';

type SidebarProps = {
    links: string[];
};
export const Sidebar: FC<SidebarProps> = memo(({ links }) => {
    const linkComponents = useMemo(() => {
        return links.map((el) => {
            return <Link to={el} key={el} />;
        });
    }, [links]);
    return (
        <Styled.MainContainer>
            <Styled.LogoContainer>logo</Styled.LogoContainer>
            <Styled.LinksContainer>{linkComponents}</Styled.LinksContainer>
            <Styled.LinksContainer>
                <Link to={MAIN_ROUTES.logout}></Link>
            </Styled.LinksContainer>
        </Styled.MainContainer>
    );
});
