import { ProgressBar } from '@scenarios/ProgressBarList/components/ProgressBar/ProgressBar';
import { ProgressBarListProps } from '@scenarios/ProgressBarList/types';
import React, { FC, memo, useMemo } from 'react';

import { Styled } from './styled';

export const ProgressBarList: FC<ProgressBarListProps> = memo(
    ({ items, className }) => {
        const progressBars = useMemo(() => {
            return items.map((item) => (
                <ProgressBar key={item.title} {...item} />
            ));
        }, [items]);

        return (
            <Styled.ListWrapper className={className}>
                {progressBars}
            </Styled.ListWrapper>
        );
    }
);
