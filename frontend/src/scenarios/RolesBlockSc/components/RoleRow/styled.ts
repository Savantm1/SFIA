import { Menu as MenuUI, MenuItem as MenuItemUI } from '@mui/material';
import { ProgressBarList } from '@scenarios/ProgressBarList';
import Color from '@ui/assets/color';
import { IconButton } from '@ui/components/IconButton/IconButton';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const EditButton = styled(IconButton)`
    height: 60px;
`;

const Content = styled.div`
    width: 100%;
`;
const ProgressBarListWrapper = styled(ProgressBarList)`
    margin-top: 6px;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    column-gap: 10px;
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
    Menu,
    MenuItem,
    Content,
    Container,
    EditButton,
    ProgressBarListWrapper,
};
