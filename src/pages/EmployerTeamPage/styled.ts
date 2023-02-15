import Color from '@ui/assets/color';
import { IconButton } from '@ui/components/IconButton/IconButton';
import styled from 'styled-components';

const PageWrapper = styled.div`
    font-family: 'inter', serif;
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 26px 30px 30px;
    overflow: auto;
`;

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 30px;
`;

const Title = styled.span`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: ${Color.mainBlack};
`;

const MemberListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;

const AvatarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    justify-content: end;
    align-items: center;
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    justify-content: end;
    text-align: right;
`;

const InfoCompany = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: ${Color.mainBlack};
`;

const InfoPhone = styled.div`
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: ${Color.secondaryGray};
`;

const ToolbarWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

const PlusButton = styled(IconButton)`
    width: 30px;
    height: 30px;
    margin-right: 30px;
    margin-top: 6px;
`;

export const Styled = {
    PageWrapper,
    Wrapper,
    HeaderWrapper,
    Title,
    MemberListWrapper,
    AvatarWrapper,
    InfoWrapper,
    InfoCompany,
    InfoPhone,
    ToolbarWrapper,
    PlusButton,
};
