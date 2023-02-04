import Color from '@ui/assets/color';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainContainer = styled.aside`
    max-width: 200px;
    margin-right: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    margin-bottom: 50px;
    border-radius: 8px;
`;

const LogoContainer = styled.div`
    max-width: 200px;
    display: flex;
    justify-content: center;
`;

const Logo = styled.img`
    width: 120px;
    margin-top: 30px;
    margin-right: 30px;
`;

const LinksContainer = styled.div`
    margin-top: 94px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex: 1;
`;

const LastLinkUI = styled(Link)`
    display: flex;
    align-items: center;
    color: ${Color.mainWhite};
    padding: 9px;
    padding-left: 45px;
    font-family: 'inter', serif;
    font-weight: 500;
    font-size: 14px;
    width: 100%;
    max-width: 200px;
    max-height: 36px;
    height: 100%;
    border-radius: 8px;
    transition: all linear 0.1s;

    & svg {
        margin-right: 8px;
    }
    &:hover {
        background: ${Color.mainWhite};
        color: ${Color.mainViolet};

        & > svg > g {
            fill: ${Color.mainViolet};
        }
    }
`;

const MainLinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
`;
export const Styled = {
    Logo,
    MainLinksContainer,
    LastLinkUI,
    MainContainer,
    LogoContainer,
    LinksContainer,
};
