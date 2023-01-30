import Color from '@ui/assets/color';
import { Button as ButtonUI } from '@ui/components/Button';
import { Text as TextUI } from '@ui/components/Text';
import { TextInput as TextInputUI } from '@ui/components/TextInput';
import { Link as LinkUI } from 'react-router-dom';
import styled from 'styled-components';

const RightSide = styled.div`
    background: ${Color.mainWhite};
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 380px;
`;

const Title = styled.span`
    font-family: 'Inter', serif;
    font-weight: 700;
    font-size: 40px;
    color: ${Color.mainWhite};
    text-align: center;
    max-width: 430px;
`;

const Subtitle = styled(TextUI)`
    margin-top: 10px;
`;

const TextInput = styled(TextInputUI)`
    margin-top: 50px;
    margin-bottom: 60px;
    width: 100%;
`;

const Button = styled(ButtonUI)`
    margin-bottom: 34px;
`;

const Link = styled(LinkUI)`
    color: ${Color.mainViolet};
    font-family: 'Inter', serif;
    font-weight: 600;
    font-size: 14px;
`;
export const Styled = {
    Link,
    Button,
    TextInput,
    Title,
    Subtitle,
    RightSide,
    ContentWrapper,
};
