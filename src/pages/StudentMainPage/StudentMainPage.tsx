import { LeftSideContent } from '@pages/StudentMainPage/components/LeftSideContent/LeftSideContent';
import { WelcomeTitle } from '@pages/StudentMainPage/components/WelcomeTitle/WelcomeTitle';
import React, { FC, memo } from 'react';

import { Styled } from './styled';

export const StudentMainPage: FC = memo(() => {
    return (
        <Styled.PageWrapper>
            <Styled.LeftSide>
                <Styled.PageTitle variant={'h1'} align={'left'}>
                    Рекомендованные курсы
                </Styled.PageTitle>
                <WelcomeTitle />
                <LeftSideContent variant={'1'} />
            </Styled.LeftSide>
            <Styled.RightSide>b</Styled.RightSide>
        </Styled.PageWrapper>
    );
});
