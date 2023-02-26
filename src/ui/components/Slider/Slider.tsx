import { Box } from '@mui/material';
import Color from '@ui/assets/color';
import { Styled } from '@ui/components/Slider/styled';
import { FC, memo } from 'react';

type SliderProps = {
    value: number;
    color: string;
};
export const Slider: FC<SliderProps> = memo(({ value, color = Color.fuxy }) => {
    return (
        <Box width={'100%'}>
            <Styled.Slider
                aria-label="Small"
                valueLabelDisplay="auto"
                defaultValue={value}
                disableSwap={true}
                step={1}
                min={1}
                max={10}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                sliderColor={color}
            />
        </Box>
    );
});
