import { Menu as MenuUI, MenuItem as MenuItemUI } from '@mui/material';
import Color from '@ui/assets/color';
import { IconButton } from '@ui/components/IconButton/IconButton';
import { Text } from '@ui/components/Text';
import styled from 'styled-components';
const PageWrapper = styled.div`
    font-family: 'inter', serif;
    width: 100%;
    height: 100%;
    display: flex;
`;

const PageTitle = styled(Text)`
    width: 100%;
`;
const LeftSide = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    align-items: center;
`;
const RightSide = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 0 30px 30px 0px;
    overflow-y: auto;
    border-left: 2px solid ${Color.secondaryLightGray};
`;

const EmptySubtitle = styled(Text)`
    max-width: 380px;
    width: 100%;
`;
const EmptyImg = styled.img`
    margin-top: 66px;
    margin-bottom: 30px;
    max-width: 450px;
    width: 100%;
`;

const SchemeImg = styled.img`
    margin-top: 66px;
    max-width: 600px;
    width: 100%;
`;

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const MenuButton = styled(IconButton)`
    width: 26px;
    height: 32px;
`;

const Menu = styled(MenuUI)`
    margin-top: 6px;
    border-radius: 8px;
    padding-top: 5px !important;
    padding-bottom: 5px !important;
`;

const MenuItem = styled(MenuItemUI)`
    font-size: 12px !important;
    line-height: 15px !important;
    padding: 8px 10px !important;
    width: 170px !important;

    &:hover,
    &:focus,
    &:active {
        background: ${Color.mainViolet} !important;
        color: ${Color.mainWhite} !important;
    }
`;

export const Styled = {
    SchemeImg,
    EmptySubtitle,
    EmptyImg,
    PageWrapper,
    LeftSide,
    RightSide,
    PageTitle,
    HeaderWrapper,
    MenuButton,
    Menu,
    MenuItem,
};
