import { FC, memo } from 'react';

import { Styled } from './styled';

type InfoListProps = {
    title: string;
    text: string;
};

export const InfoList: FC<InfoListProps> = memo(({ title, text }) => {
    return (
        <Styled.Wrapper>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Text>{text}</Styled.Text>
        </Styled.Wrapper>
    );
});
