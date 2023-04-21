import { Menu as MenuUI, MenuItem as MenuItemUI } from '@mui/material';
import Color from '@ui/assets/color';
import { IconButton } from '@ui/components/IconButton/IconButton';
import { Text } from '@ui/components/Text';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const Title = styled(Text)``;
const Level = styled(Text)`
    margin-left: 6px;
    margin-right: 8px;
    margin-top: 7px;
    width: 30px;
`;

const Block = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const SliderWrapper = styled.div`
    display: flex;
`;

const MenuButton = styled(IconButton)`
    height: 32px;
    width: 26px;
    margin-bottom: 10px;
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

const EditButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const EditButton = styled(IconButton)`
    margin-inline: 1px;
    width: 25px;
    height: 30px;
    & svg {
        color: white;
    }
`;
export const Styled = {
    EditButton,
    EditButtonsWrapper,
    Menu,
    MenuItem,
    Container,
    Title,
    Block,
    SliderWrapper,
    Level,
    MenuButton,
};
