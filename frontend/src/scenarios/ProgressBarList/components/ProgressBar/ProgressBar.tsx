import { Popover } from '@mui/material';
import { useMenu } from '@pages/EmployerVacancyProfilePage/hooks/useMenu';
import { DetailPopup } from '@scenarios/ProgressBarList/components/DetailPopup/DetailPopup';
import { Styled } from '@scenarios/ProgressBarList/styled';
import { ProgressBarProps } from '@scenarios/ProgressBarList/types';
import Color from '@ui/assets/color';
import { Slider } from '@ui/components/Slider';
import { FC, memo, useState } from 'react';

export const ProgressBar: FC<ProgressBarProps> = memo(
    ({
        categoryTitle,
        subcategoryTitle,
        value = 0,
        code,
        title,
        color,
        subColor,
        isBig,
        isEdit,
        onDelete,
        onChange,
        min,
        max,
        text,
    }) => {
        const { anchorEl, isMenuOpen, anchorClickHandler, closeMenuHandler } =
            useMenu();
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
                {isEdit && <Styled.DeleteBtn onClick={() => onDelete?.()} />}
                <Styled.ProgressBarOverlay
                    aria-controls={isMenuOpen ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={isMenuOpen ? 'true' : undefined}
                    id="basic-button"
                    onClick={anchorClickHandler as VoidFunction}
                />
                <Styled.ProgressBar
                    thickness={5}
                    variant="determinate"
                    value={percent}
                    customColor={isEdit ? Color.secondaryGray : color}
                    isBig={isBig}
                />

                {isEdit && (
                    <DetailPopup
                        onChange={onChange!}
                        abbr={title ?? ''}
                        color={color}
                        title={title}
                        anchorEl={anchorEl}
                        isMenuOpen={isMenuOpen}
                        closeMenuHandler={closeMenuHandler}
                    />
                )}

                <Styled.LabelWrapper>
                    <Styled.Title
                        color={isEdit ? Color.secondaryGray : color}
                        isBig={isBig}
                    >
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
