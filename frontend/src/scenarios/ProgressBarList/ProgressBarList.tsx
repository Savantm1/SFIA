import { ProgressBar } from '@scenarios/ProgressBarList/components/ProgressBar/ProgressBar';
import { ProgressBarListProps } from '@scenarios/ProgressBarList/types';
import { FC, memo, useMemo } from 'react';

import { Styled } from './styled';

export const ProgressBarList: FC<ProgressBarListProps> = memo(
    ({
        items,
        isBig = false,
        className,
        isEdit = false,
        onDelete,
        onChange,
        skillsGap,
    }) => {
        const progressBars = useMemo(() => {
            return items.map((item) => (
                <ProgressBar
                    key={item.id}
                    {...item}
                    isBig={isBig}
                    isEdit={isEdit}
                    onDelete={() => onDelete?.(item)}
                    onChange={(value) => onChange?.(item.id!, value)}
                />
            ));
        }, [isBig, isEdit, items, onChange, onDelete]);

        return (
            <Styled.ListWrapper skillsGap={skillsGap} className={className}>
                {progressBars}
            </Styled.ListWrapper>
        );
    }
);
