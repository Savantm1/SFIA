import { Popover } from '@mui/material';
import { Styled } from '@scenarios/ProgressBarList/styled';
import { ProgressBarProps } from '@scenarios/ProgressBarList/types';
import Color from '@ui/assets/color';
import { Slider } from '@ui/components/Slider';
import { FC, memo, useState } from 'react';

export const ProgressBar: FC<ProgressBarProps> = memo(
    ({
        subcategoryTitle,
        value = 0,
        code,
        color,
        subColor,
        isBig,
        min,
        max,
        text,
    }) => {
        const percent = Math.round((100 / 7) * value);

        const [popoverAnchorEl, setPopoverAnchorEl] =
            useState<HTMLElement | null>(null);

        const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
            setPopoverAnchorEl(event.currentTarget);
        };

        const handlePopoverClose = () => {
            setPopoverAnchorEl(null);
        };

        const open = Boolean(popoverAnchorEl);

        return (
            <Styled.Wrapper
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            >
                <Styled.ProgressBar
                    thickness={5}
                    variant="determinate"
                    value={percent}
                    customColor={color}
                    isBig={isBig}
                />

                <Styled.LabelWrapper>
                    <Styled.Title color={color} isBig={isBig}>
                        {code}
                    </Styled.Title>
                    <Styled.Subtitle isBig={isBig}>
                        {value + ' ур'}
                    </Styled.Subtitle>
                </Styled.LabelWrapper>

                <Popover
                    id="mouse-over-popover"
                    sx={{
                        pointerEvents: 'none',
                    }}
                    open={open}
                    anchorEl={popoverAnchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Styled.PopoverContentWrapper>
                        <Styled.Row>
                            <Styled.PopoverInfo>
                                <Styled.PopoverTitle>
                                    {subcategoryTitle}
                                </Styled.PopoverTitle>
                                <Styled.PopoverSubtitle>
                                    {text}
                                </Styled.PopoverSubtitle>
                            </Styled.PopoverInfo>

                            <Styled.PopoverCode
                                color={color}
                                subColor={subColor}
                            >
                                <Styled.PopoverCodeSpan>
                                    {code}
                                </Styled.PopoverCodeSpan>
                            </Styled.PopoverCode>
                        </Styled.Row>

                        <Styled.PopoverSliderWrapper>
                            <Slider
                                setCurrentValue={() => {}}
                                min={min}
                                max={max}
                                value={value}
                                color={color}
                                cantEdit={false}
                            />
                            <Styled.PopoverLevel
                                variant={'body1'}
                                color={Color.secondaryGray}
                            >
                                {value} Ур
                            </Styled.PopoverLevel>
                        </Styled.PopoverSliderWrapper>
                    </Styled.PopoverContentWrapper>
                </Popover>
            </Styled.Wrapper>
        );
    }
);
