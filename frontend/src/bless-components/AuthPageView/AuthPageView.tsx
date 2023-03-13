import { FC, memo, ReactElement } from 'react';

import { Styled } from './styled';

type AuthPageViewProps = {
    children: ReactElement;
};
export const AuthPageView: FC<AuthPageViewProps> = memo(({ children }) => {
    return (
        <Styled.PageWrapper>
            <Styled.LeftSide>
                <Styled.Title>Платформа развития цифровых навыков</Styled.Title>
            </Styled.LeftSide>
            <Styled.RightSide>{children}</Styled.RightSide>
        </Styled.PageWrapper>
    );
});
