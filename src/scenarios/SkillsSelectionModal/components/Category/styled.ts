import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 390px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
`;

const Header = styled.div<{ color: string }>`
    width: 100%;
    background: ${(props) => props.color};
    padding: 10px 8px;
`;

const SubCategoryContainer = styled.div<{ color: string }>`
    background: ${(props) => props.color};
    padding: 0 8px 8px 8px;
    width: 100%;
`;

export const Styled = {
    Container,
    SubCategoryContainer,
    Header,
};
