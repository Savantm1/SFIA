import { getStepValues } from '@scenarios/ProgressBarList/utils/getStepValues';
import { useCallback, useState } from 'react';

type UseProgressBarHandlersType = (props: {
    itemsLength: number;
    isBig: boolean;
}) => {
    onLeft: VoidFunction;
    onRight: VoidFunction;
    arrowsVisibility: { left: boolean; right: boolean };
    offset: number;
};
export const useProgressBarHandlers: UseProgressBarHandlersType = ({
    itemsLength,
    isBig,
}) => {
    const { step, maxOffset } = getStepValues(itemsLength, isBig);
    const [offset, setOffSet] = useState(0);

    const [arrowsVisibility, setArrowsVisibility] = useState({
        left: false,
        right: true,
    });

    const onRight = useCallback(() => {
        setOffSet((currentOffset) => {
            const newOffset = currentOffset - step;
            console.log(newOffset, maxOffset);
            if (newOffset < 0) {
                setArrowsVisibility({ left: true, right: true });
            }
            if (newOffset <= maxOffset) {
                setArrowsVisibility({ left: true, right: false });
            }
            return Math.max(newOffset, maxOffset);
        });
    }, [maxOffset, step]);

    const onLeft = useCallback(() => {
        setOffSet((currentOffset) => {
            const newOffset = currentOffset + step;
            if (newOffset >= 0) {
                setArrowsVisibility({ left: false, right: true });
            }
            console.log(newOffset, 0);
            return Math.min(newOffset, 0);
        });
    }, [step]);

    return {
        onLeft,
        onRight,
        arrowsVisibility,
        offset,
    };
};
