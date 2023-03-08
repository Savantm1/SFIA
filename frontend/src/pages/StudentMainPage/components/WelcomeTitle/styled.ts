import Color from '@ui/assets/color';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    border-radius: 10px;
    margin-top: 30px;
    background: ${Color.welcome_bg};
    height: 100px;
    width: 100%;
`;

const Title = styled.span`
    display: block;
    margin-bottom: 4px;
    font-size: 20px;
    color: #000;
`;
const ImageBlock = styled.div`
    display: flex;
    align-items: flex-end;
    margin-right: 50px;
    & img {
        width: 150px;
        height: 120px;
        margin-bottom: 2px;
    }
`;
const TextBlock = styled.div`
    padding: 20px;
`;
export const Styled = {
    Title,
    Container,
    ImageBlock,
    TextBlock,
};
