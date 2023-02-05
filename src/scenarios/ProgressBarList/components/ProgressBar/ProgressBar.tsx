import { Styled } from '@scenarios/ProgressBarList/styled';
import { ProgressBarProps } from '@scenarios/ProgressBarList/types';
import React, { FC, memo } from 'react';

export const ProgressBar: FC<ProgressBarProps> = memo(
    ({ value, title, subtitle, color }) => {
        return (
            <Styled.Wrapper>
                <Styled.ProgressBar
                    thickness={5}
                    variant="determinate"
                    value={value}
                    customColor={color}
                />
                <Styled.LabelWrapper>
                    <Styled.Title color={color}>{title}</Styled.Title>
                    <Styled.Subtitle>{subtitle}</Styled.Subtitle>
                </Styled.LabelWrapper>
            </Styled.Wrapper>
        );
    }
);
