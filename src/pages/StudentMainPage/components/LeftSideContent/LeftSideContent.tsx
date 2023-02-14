import Color from '@ui/assets/color';
import Scheme from '@ui/assets/images/Group 519.png';
import EmptyImage from '@ui/assets/images/undraw_learning_re_32qv 1.png';
import React, { FC, memo } from 'react';

import { Styled } from './styled';
type LeftSideContentProps = {
    variant: '1' | '2';
};
export const LeftSideContent: FC<LeftSideContentProps> = memo(({ variant }) => {
    return (
        <Styled.Container>
            {variant === '1' && (
                <>
                    <Styled.EmptyImg src={EmptyImage} alt={'empty'} />
                    <Styled.EmptySubtitle
                        variant={'h4'}
                        color={Color.secondaryDarkGray}
                        align={'center'}
                    >
                        Здесь будут представлены курсы, которые повысят ваш
                        навык на следующий уровень
                    </Styled.EmptySubtitle>
                </>
            )}
            {variant === '2' && (
                <Styled.SchemeImg src={Scheme} alt={'scheme'} />
            )}
        </Styled.Container>
    );
});
