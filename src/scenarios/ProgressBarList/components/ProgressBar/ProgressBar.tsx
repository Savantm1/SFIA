import { Styled } from '@scenarios/ProgressBarList/styled';
import { ProgressBarProps } from '@scenarios/ProgressBarList/types';
import React, { FC, memo } from 'react';

export const ProgressBar: FC<ProgressBarProps> = memo(
    ({ value, title, subtitle, color, isBig }) => {
        return (
            <Styled.Wrapper>
                <Styled.ProgressBar
                    thickness={5}
                    variant="determinate"
                    value={value}
                    customColor={color}
                    isBig={isBig}
                />
                <Styled.LabelWrapper>
                    <Styled.Title color={color} isBig={isBig}>
                        {title}
                    </Styled.Title>
                    <Styled.Subtitle isBig={isBig}>{subtitle}</Styled.Subtitle>
                </Styled.LabelWrapper>
            </Styled.Wrapper>
        );
    }
);
