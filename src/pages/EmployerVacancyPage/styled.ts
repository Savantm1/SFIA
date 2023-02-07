import Color from '@ui/assets/color';
import styled from 'styled-components';

const PageWrapper = styled.div`
    font-family: 'inter', serif;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

const LeftSideWrapper = styled.div`
    width: 70%;
    height: 100%;
    padding: 30px 26px 30px 30px;
`;

const RightSideWrapper = styled.div`
    width: 30%;
    height: 100%;
    border-left: 1px solid #edeaea;
    padding: 30px;
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

const VacancyListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
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
    PageWrapper,
    LeftSideWrapper,
    RightSideWrapper,
    HeaderWrapper,
    Title,
    VacancyListWrapper,
    AvatarWrapper,
    InfoWrapper,
    InfoCompany,
    InfoPhone,
    TitleCompany,
    City,
    Link,
    Description,
};
