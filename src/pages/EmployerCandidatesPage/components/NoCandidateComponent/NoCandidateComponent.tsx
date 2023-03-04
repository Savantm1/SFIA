import image from '@ui/assets/images/no_candidate_image.png';
import { FC, memo } from 'react';

import { Styled } from './styled';

export const NoCandidateComponent: FC = memo(() => {
    return (
        <Styled.Wrapper>
            <Styled.Image src={image} />
            <Styled.Title>
                Мы пока не нашли для Вас подходящего кандидата
            </Styled.Title>
        </Styled.Wrapper>
    );
});
