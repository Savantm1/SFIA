import { Box } from '@mui/material';
import Color from '@ui/assets/color';
import { Styled } from '@ui/components/Slider/styled';
import { FC, memo } from 'react';

export const Slider: FC = memo(() => {
    return (
        <Box width={300}>
            <Styled.Slider
                aria-label="Small"
                valueLabelDisplay="auto"
                defaultValue={2}
                step={1}
                min={1}
                max={10}
                sliderColor={Color.fuxy}
            />
        </Box>
    );
});
