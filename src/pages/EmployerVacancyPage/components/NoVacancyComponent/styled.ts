import Color from '@ui/assets/color';
import { Button as ButtonUI } from '@ui/components/Button';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-family: 'inter', serif;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -30px;
`;

const Image = styled.img`
    max-width: 466px;
    width: 100%;
    margin-bottom: 40px;
`;

const Title = styled.span`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: ${Color.secondaryGray};
    margin-bottom: 20px;
    max-width: 320px;
    text-align: center;
`;

const Button = styled(ButtonUI)`
    width: 220px !important;
`;

export const Styled = {
    Wrapper,
    Image,
    Title,
    Button,
};
