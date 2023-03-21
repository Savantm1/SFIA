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
    margin: -10px 50px 10px 14px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    min-height: 30px;
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
    overflow: scroll;
    height: calc(100vh - 190px);
    width: 100%;
`;

const DeleteSelectedSkillBtn = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin-right: 5px;
    z-index: 1;
`;

const ScrollContainer = styled.div`
    padding-inline: 14px;
    overflow: scroll;
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 1040px;
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
    DeleteSelectedSkillBtn,
    Close,
    Footer,
    ScrollContainer,
};
