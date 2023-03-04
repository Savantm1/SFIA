import { Menu as MenuUI, MenuItem as MenuItemUI } from '@mui/material';
import { ProgressBarList } from '@scenarios/ProgressBarList';
import Color from '@ui/assets/color';
import { IconButton } from '@ui/components/IconButton/IconButton';
import styled from 'styled-components';

const PageWrapper = styled.div`
    font-family: 'inter', serif;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

const Wrapper = styled.div`
    width: 70%;
    height: 100%;
    padding: 30px 26px 30px 30px;
    overflow: auto;
`;

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 16px;
`;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

const Title = styled.span`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${Color.mainBlack};
`;

const BackButton = styled(IconButton)`
    background: ${Color.mainWhite};
    cursor: pointer;
    width: 22px;
    height: 22px;
    padding-top: 8px;
`;

const MenuButton = styled(IconButton)`
    width: 26px;
    height: 32px;
`;

const GeneralInfoWrapper = styled.div`
    background: ${Color.mainWhite};
    box-shadow: 0 1px 35px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-inline: 20px;
    margin-bottom: 30px;
`;

const TextInfoWrapper = styled.div`
    padding-top: 18px;
    padding-bottom: 10px;
`;

const BigText = styled.div`
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 20px;
`;

const Text = styled.div`
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 10px;
`;

const Image = styled.img``;

// TODO: Пока не знаю, как уменьшить паддинги с 8 до 5
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

const ProgressBar = styled(ProgressBarList)`
    justify-content: flex-start;
    gap: 10px;
`;

export const Styled = {
    PageWrapper,
    Wrapper,
    TitleWrapper,
    HeaderWrapper,
    Title,
    MenuButton,
    BackButton,
    GeneralInfoWrapper,
    TextInfoWrapper,
    BigText,
    Text,
    Image,
    Menu,
    MenuItem,
    ProgressBar,
};
