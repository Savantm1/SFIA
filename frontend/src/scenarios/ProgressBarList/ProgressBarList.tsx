import { ProgressBar } from '@scenarios/ProgressBarList/components/ProgressBar/ProgressBar';
import { useProgressBarHandlers } from '@scenarios/ProgressBarList/hooks/useProgressBarHandlers';
import { Styled } from '@scenarios/ProgressBarList/styled';
import { ProgressBarListProps } from '@scenarios/ProgressBarList/types';
import { Icons } from '@ui/assets/icons';
import { FC, memo, useMemo } from 'react';

export const ProgressBarList: FC<ProgressBarListProps> = memo(
    ({ items, isBig = false, className, skillsGap, carousel = true }) => {
        const { onLeft, onRight, arrowsVisibility, offset } =
            useProgressBarHandlers({ itemsLength: items.length, isBig });
        const progressBars = useMemo(() => {
            return items.map((item) => (
                <ProgressBar key={item.id} {...item} isBig={isBig} />
            ));
        }, [isBig, items]);

        return carousel ? (
            <Styled.ProgressBarContainer>
                <Styled.LeftButton
                    iconName={Icons.backBlack}
                    onClick={onLeft}
                    arrowVisibility={arrowsVisibility.left}
                />
                <Styled.SliderWrapper isBig={isBig}>
                    <Styled.ListWrapper
                        skillsGap={skillsGap}
                        className={className}
                        offset={offset}
                    >
                        {progressBars}
                    </Styled.ListWrapper>
                </Styled.SliderWrapper>
                <Styled.RightButton
                    arrowVisibility={arrowsVisibility.right}
                    iconName={Icons.backBlack}
                    onClick={onRight}
                />
            </Styled.ProgressBarContainer>
        ) : (
            <Styled.ListWrapper skillsGap={skillsGap} className={className}>
                {progressBars}
            </Styled.ListWrapper>
        );
    }
);
