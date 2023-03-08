import Color from '@ui/assets/color';
import { Text } from '@ui/components/Text';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
`;

const ShowAllBtn = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 10px;
    font-weight: 500;
    align-self: flex-end;
    cursor: pointer;
    transition: all ease 0.1s;
    &:hover {
        transform: scale(1.01);
    }

    &:after {
        margin-left: 6px;
        content: '';
        width: 5px;
        height: 5px;
        border-top: 1.5px solid ${Color.mainViolet};
        border-right: 1.5px solid ${Color.mainViolet};
        transform: rotate(45deg) translateY(1px);
    }
`;

const EmptySkillsBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Description = styled.span`
    font-weight: 500;
    font-size: 12px;
    text-align: center;
    width: 100%;
    max-width: 220px;
    color: ${Color.secondaryGray};
    margin-top: 20px;
    margin-bottom: 20px;
`;

const SkillsBar = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
    margin-top: 25px;
`;

const BackButton = styled.div`
    content: '';
    width: 16px;
    height: 14px;
    border-top: 2px solid ${Color.mainViolet};
    border-right: 2px solid ${Color.mainViolet};
    transform: rotate(-135deg) translateY(-8px);
    cursor: pointer;
    transition: all ease 0.1s;
    &:hover {
        transform: rotate(-135deg) translateY(-8px) scale(1.1);
    }
`;

const SkillsTitle = styled(Text)`
    width: 100%;
`;
export const Styled = {
    SkillsTitle,
    BackButton,
    Container,
    ShowAllBtn,
    EmptySkillsBlock,
    Description,
    SkillsBar,
};
