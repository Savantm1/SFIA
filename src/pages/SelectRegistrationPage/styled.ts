import { SelectItem } from '@pages/SelectRegistrationPage/components/SelectItem/SelectItem';
import Color from '@ui/assets/color';
import { Text } from '@ui/components/Text';
import { Link as LinkUI } from 'react-router-dom';
import styled from 'styled-components';
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Item = styled(SelectItem)`
    margin-bottom: 20px;
`;

const Subtitle = styled(Text)`
    margin-top: 16px;
    margin-bottom: 26px;
`;

const Link = styled(LinkUI)`
    color: ${Color.mainViolet};
    font-family: 'Inter', serif;
    font-weight: 600;
    font-size: 14px;
`;
export const Styled = {
    ContentWrapper,
    Item,
    Subtitle,
    Link,
};
