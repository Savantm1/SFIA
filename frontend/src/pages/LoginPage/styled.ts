import Color from '@ui/assets/color';
import { Button as ButtonUI } from '@ui/components/Button';
import { Text as TextUI } from '@ui/components/Text';
import { TextInput as TextInputUI } from '@ui/components/TextInput';
import { Link as LinkUI } from 'react-router-dom';
import styled from 'styled-components';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 380px;
`;

const Subtitle = styled(TextUI)`
    margin-top: 10px;
`;
const TextInput = styled(TextInputUI)`
    margin-top: 50px;
    margin-bottom: 60px;
    width: 100%;
`;

const Button = styled(ButtonUI)``;

const Link = styled(LinkUI)`
    color: ${Color.mainViolet};
    font-family: 'Inter', serif;
    font-weight: 600;
    font-size: 14px;
`;

const RegistrationText = styled(TextUI)`
    margin-top: 34px;
`;
export const Styled = {
    RegistrationText,
    Link,
    Button,
    TextInput,
    Subtitle,
    ContentWrapper,
};
