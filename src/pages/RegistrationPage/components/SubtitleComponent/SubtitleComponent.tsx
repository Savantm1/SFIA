import { Styled } from '@pages/RegistrationPage/styled';
import Color from '@ui/assets/color';
import { Text } from '@ui/components/Text';
import React, { FC, memo } from 'react';

type SubtitleComponentProps = {
    number: string;
    text: string;
};

export const SubtitleComponent: FC<SubtitleComponentProps> = memo(
    ({ number, text }) => {
        return (
            <Styled.TitleRow>
                <Styled.EllipseNumber
                    variant={'h3'}
                    align={'center'}
                    color={Color.lightRed}
                >
                    {number}
                </Styled.EllipseNumber>

                <Text variant={'h3'} align={'left'} color={Color.mainBlack}>
                    {text}
                </Text>
            </Styled.TitleRow>
        );
    }
);
