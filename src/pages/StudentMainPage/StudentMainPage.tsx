import { WelcomeTitle } from '@pages/StudentMainPage/components/WelcomeTitle/WelcomeTitle';
import Color from '@ui/assets/color';
import EmptyImage from '@ui/assets/images/undraw_learning_re_32qv 1.png';
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
                <Styled.EmptyImg src={EmptyImage} alt={'empty'} />
                <Styled.EmptySubtitle
                    variant={'h4'}
                    color={Color.secondaryDarkGray}
                    align={'center'}
                >
                    Здесь будут представлены курсы, которые повысят ваш навык на
                    следующий уровень
                </Styled.EmptySubtitle>
            </Styled.LeftSide>
            <Styled.RightSide>b</Styled.RightSide>
        </Styled.PageWrapper>
    );
});
