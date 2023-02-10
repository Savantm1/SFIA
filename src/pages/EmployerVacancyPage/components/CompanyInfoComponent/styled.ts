import Color from '@ui/assets/color';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 30%;
    height: 100%;
    border-left: 1px solid #edeaea;
    padding: 30px;
`;

const AvatarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    justify-content: end;
    align-items: center;
    margin-bottom: 40px;
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

const TitleCompany = styled.div`
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    color: ${Color.mainBlack};
    margin-bottom: 12px;
`;

const City = styled.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: ${Color.mainBlack};
    margin-bottom: 2px;
`;

const Link = styled.a`
    display: block;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 2px;
    color: ${Color.blue};
`;

const Description = styled.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-top: 18px;
    color: ${Color.mainBlack};
`;

export const Styled = {
    Wrapper,
    AvatarWrapper,
    InfoWrapper,
    InfoCompany,
    InfoPhone,
    TitleCompany,
    City,
    Link,
    Description,
};
