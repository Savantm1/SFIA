import Color from '@ui/assets/color';
import styled from 'styled-components';

const Container = styled.label<{ color: string; isSelected: boolean }>`
    background: ${({ color, isSelected }) =>
        isSelected ? color : Color.secondaryGray};
    width: 20px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 4px;
    cursor: pointer;
`;

const Value = styled.span`
    color: ${Color.mainWhite};
    font-size: 12px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
`;

const Radio = styled.input`
    width: 1px;
    height: 1px;
    position: absolute;
    opacity: 0;
`;

const EmptyContainer = styled.div`
    width: 20px;
    height: 25px;
    &:before {
        content: '';
    }
`;

export const Styled = { EmptyContainer, Container, Value, Radio };
