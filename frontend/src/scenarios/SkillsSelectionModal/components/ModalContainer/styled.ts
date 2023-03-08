import Color from '@ui/assets/color';
import { Button } from '@ui/components/Button';
import { IconButton } from '@ui/components/IconButton/IconButton';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width: 1230px;
    margin-bottom: 14px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
`;

const DeleteBar = styled.div`
    background: ${Color.mainWhite};
    top: 0;
    margin-left: 14px;
    margin-top: -10px;
    margin-right: 50px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

const Close = styled(IconButton)`
    background: ${Color.mainWhite};
`;
const Footer = styled.div`
    width: 100%;
    padding-top: 14px;
    padding-right: 14px;
    display: flex;
    justify-content: flex-end;
`;

const ContentOverflow = styled.div`
    overflow: hidden;
    height: calc(100vh - 190px);
`;

const DeleteCategoryBtn = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-right: 5px;
`;

const ScrollContainer = styled.div`
    padding-inline: 14px;
    overflow: scroll;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
`;

const NextButton = styled(Button)`
    width: 160px;
`;
export const Styled = {
    ContentOverflow,
    NextButton,
    DeleteBar,
    Container,
    DeleteCategoryBtn,
    Close,
    Footer,
    ScrollContainer,
};
