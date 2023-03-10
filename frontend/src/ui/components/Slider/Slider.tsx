import { Box } from '@mui/material';
import Color from '@ui/assets/color';
import { Styled } from '@ui/components/Slider/styled';
import { FC, memo } from 'react';

type SliderProps = {
    value: number;
    color: string;
    cantEdit?: boolean;
};
export const Slider: FC<SliderProps> = memo(
    ({ value, color = Color.fuxy, cantEdit = true }) => {
        return (
            <Box width={'100%'}>
                <Styled.Slider
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    defaultValue={value}
                    disableSwap={cantEdit}
                    step={1}
                    min={1}
                    max={10}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    sliderColor={color}
                />
            </Box>
        );
    }
);
