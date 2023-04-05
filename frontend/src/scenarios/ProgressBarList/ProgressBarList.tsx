import { ProgressBar } from '@scenarios/ProgressBarList/components/ProgressBar/ProgressBar';
import { ProgressBarListProps } from '@scenarios/ProgressBarList/types';
import { FC, memo, useMemo } from 'react';

import { Styled } from './styled';

export const ProgressBarList: FC<ProgressBarListProps> = memo(
    ({ items, isBig = false, className, isEdit = false, onDelete }) => {
        console.log('items', items);

        const progressBars = useMemo(() => {
            return items.map((item) => (
                <ProgressBar
                    key={item.title}
                    {...item}
                    isBig={isBig}
                    isEdit={isEdit}
                    onDelete={() => onDelete?.(item)}
                />
            ));
        }, [isBig, isEdit, items, onDelete]);

        return (
            <Styled.ListWrapper className={className}>
                {progressBars}
            </Styled.ListWrapper>
        );
    }
);
