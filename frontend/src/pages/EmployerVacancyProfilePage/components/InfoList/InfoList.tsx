import { FC, memo, useMemo } from 'react';

import { Styled } from './styled';

type InfoListProps = {
    title: string;
    list: string[];
};

export const InfoList: FC<InfoListProps> = memo(({ title, list }) => {
    const items = useMemo(() => {
        return list.map((item, index) => {
            return <Styled.Item key={index}>{item}</Styled.Item>;
        });
    }, [list]);

    return (
        <Styled.Wrapper>
            <Styled.Title>{title}</Styled.Title>
            <Styled.List>{items}</Styled.List>
        </Styled.Wrapper>
    );
});
