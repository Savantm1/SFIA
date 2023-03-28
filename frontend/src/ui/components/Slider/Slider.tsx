import { Box } from '@mui/material';
import Color from '@ui/assets/color';
import { Styled } from '@ui/components/Slider/styled';
import { FC, memo } from 'react';

type SliderProps = {
    value: number;
    color: string;
    cantEdit?: boolean;
    min?: number;
    max?: number;
    setCurrentValue?: any;
};
export const Slider: FC<SliderProps> = memo(
    ({
        value,
        color = Color.fuxy,
        cantEdit = true,
        min,
        max,
        setCurrentValue,
    }) => {
        return (
            <Box width={'100%'}>
                <Styled.Slider
                    onChange={(_, value) => setCurrentValue(value)}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    defaultValue={value}
                    value={value}
                    disableSwap={cantEdit}
                    step={1}
                    min={min}
                    max={max}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    sliderColor={color}
                />
            </Box>
        );
    }
);
