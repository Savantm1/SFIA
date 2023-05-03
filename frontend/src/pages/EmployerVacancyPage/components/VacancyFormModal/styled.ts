import { ProgressBarList } from '@scenarios/ProgressBarList';
import Color from '@ui/assets/color';
import { IconButton } from '@ui/components/IconButton/IconButton';
import { Select as SelectUI } from '@ui/components/Select';
import { TextArea as TextAreaUI } from '@ui/components/TextArea';
import { TextInput as TextInputUI } from '@ui/components/TextInput';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 20px 30px;
`;

const Title = styled.div`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${Color.mainBlack};
    margin-bottom: 6px;
`;

const Subtitle = styled.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: ${Color.secondaryGray};
    margin-bottom: 30px;
`;

const FormWrapper = styled.div``;

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

const TextInput = styled(TextInputUI)`
    width: 300px;
    margin-bottom: 4px;
`;

const TextArea = styled(TextAreaUI)`
    width: 300px;
    margin-bottom: 4px;
`;

const Select = styled(SelectUI)`
    width: 250px !important;
    align-self: flex-start;
`;

const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 10px;
`;

const CreateButton = styled.button`
    width: 150px !important;
    height: 36px;
    font-weight: 700 !important;
    font-size: 12px !important;
    line-height: 15px !important;
    border-radius: 8px;
    background-color: ${Color.mainViolet};
    color: ${Color.mainWhite};
    border: 1px solid ${Color.mainViolet} !important;
    cursor: pointer;
`;

const CancelButton = styled.button`
    width: 100px !important;
    height: 36px;
    border-radius: 8px;
    border: 1px solid ${Color.secondaryGray} !important;
    background: ${Color.mainWhite} !important;
    color: ${Color.secondaryGray} !important;
    font-weight: 700 !important;
    font-size: 12px !important;
    line-height: 15px !important;
    cursor: pointer;
`;

const AddSkillsButton = styled.button`
    width: 300px !important;
    height: 36px;
    border-radius: 8px;
    border: 1px solid ${Color.secondaryGray} !important;
    background: ${Color.mainWhite} !important;
    color: ${Color.secondaryGray} !important;
    font-weight: 700 !important;
    font-size: 12px !important;
    line-height: 15px !important;
    cursor: pointer;
`;

export const DickButton = styled(IconButton)`
    width: 30px;
    height: 36px;
    margin-left: -14px;
    margin-top: 2px;
`;

const ProgressBar = styled(ProgressBarList)`
    width: 100%;
    height: 100%;
    max-width: 250px;
`;

export const Styled = {
    Wrapper,
    Title,
    Subtitle,
    FormWrapper,
    Row,
    TextInput,
    TextArea,
    ButtonsWrapper,
    CreateButton,
    CancelButton,
    AddSkillsButton,
    DickButton,
    Select,
    ProgressBar,
};
