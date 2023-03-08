import { WELCOME_BLOCK_SUBTITLES } from '@pages/StudentMainPage/components/WelcomeTitle/constants';
import Color from '@ui/assets/color';
import Image from '@ui/assets/images/undraw_online_test_re_kyfx 1.png';
import { Text } from '@ui/components/Text';
import { FC, memo } from 'react';

import { Styled } from './styled';

type WelcomeTitleProps = {
    subtitle?: string;
};
export const WelcomeTitle: FC<WelcomeTitleProps> = memo(
    ({ subtitle = WELCOME_BLOCK_SUBTITLES.main }) => {
        return (
            <Styled.Container>
                <Styled.TextBlock>
                    <Styled.Title>Добро пожаловать!</Styled.Title>
                    <Text
                        variant={'h4'}
                        align={'left'}
                        color={Color.secondaryDarkGray}
                    >
                        {subtitle}
                    </Text>
                </Styled.TextBlock>
                <Styled.ImageBlock>
                    <img src={Image} alt={'image'} />
                </Styled.ImageBlock>
            </Styled.Container>
        );
    }
);
