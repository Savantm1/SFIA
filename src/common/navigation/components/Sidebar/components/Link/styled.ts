import Color from '@ui/assets/color';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkUI = styled(Link)`
    display: flex;
    align-items: center;
    border-radius: 8px;
    padding: 10px;
    padding-left: 45px;
    margin-bottom: 20px;
    color: ${Color.mainWhite};
    font-family: 'inter', serif;
    font-size: 14px;
    font-weight: 500;
    width: 100%;
    max-width: 200px;
    max-height: 36px;
    height: 100%;
    transition: all linear 0.1s;
    & svg {
        margin-right: 8px;
    }
    &:hover {
        background: ${Color.mainWhite};
        color: ${Color.mainViolet};

        & > svg > path {
            fill: ${Color.mainViolet};
        }
    }
`;

const Icon = styled.div<{ icon: string }>`
    background: center no-repeat url(${(props) => props.icon});
    width: 30px;
    height: 30px;
`;

export const Styled = {
    LinkUI,
    Icon,
};
