import Color from '@ui/assets/color';
import { IconButton } from '@ui/components/IconButton/IconButton';
import { Text as TextUI } from '@ui/components/Text';
import { TextArea as TextAreaUI } from '@ui/components/TextArea';
import { TextInput as TextInputUI } from '@ui/components/TextInput';
import styled from 'styled-components';

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 520px;
    width: 100%;
`;

const MainTitle = styled(TextUI)`
    margin-bottom: 30px;
`;

const MainTitleRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

const TitleRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
`;

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

const TextInput = styled(TextInputUI)`
    width: 100%;
    margin-bottom: 4px;
`;

const TextArea = styled(TextAreaUI)`
    margin-bottom: 74px;
`;

const BackButton = styled(IconButton)`
    background: ${Color.mainWhite};
    cursor: pointer;
    width: 20px;
    height: 20px;
    padding-top: 8px;
`;

const EllipseNumber = styled(TextUI)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    border: 1px solid ${Color.lightRed};
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
`;

export const Styled = {
    ContentWrapper,
    MainTitle,
    MainTitleRow,
    TitleRow,
    Row,
    TextInput,
    TextArea,
    BackButton,
    EllipseNumber,
};
