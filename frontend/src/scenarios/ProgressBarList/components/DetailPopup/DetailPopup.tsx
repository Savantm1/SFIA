import Color, { KeysOfColor } from '@ui/assets/color';
import { Slider } from '@ui/components/Slider';
import { Text } from '@ui/components/Text';
import { FC, memo, useCallback, useState } from 'react';

import { Styled } from './styled';

type DetailPopupProps = {
    anchorEl: null | HTMLElement;
    isMenuOpen: boolean;
    closeMenuHandler: VoidFunction;
    color?: (typeof Color)[KeysOfColor] | string;
    value?: number;
    title?: string;
    subTitle?: string;
    abbr: string;
    onChange: (value: number) => void;
};
export const DetailPopup: FC<DetailPopupProps> = memo(
    ({
        anchorEl,
        isMenuOpen,
        closeMenuHandler,
        color = Color.fuxy,
        value = 5,
        title = 'Стратегическое планирование',
        subTitle = 'Стратегия и архитектура',
        abbr = 'ITSR',
        onChange,
    }) => {
        const [sliderValue, setSliderValue] = useState(value);

        const onChangeHandler = useCallback(
            (currentValue: number) => {
                setSliderValue(currentValue);
                onChange(currentValue);
            },
            [onChange]
        );
        return (
            <Styled.Container>
                <Styled.Menu
                    id="basic-menu"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    anchorEl={anchorEl}
                    open={isMenuOpen}
                    onClose={closeMenuHandler}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <Styled.EditBlock>
                        <Styled.HeaderWrapper>
                            <Styled.TextBlock>
                                <Text
                                    variant={'h6'}
                                    color={Color.secondaryDarkGray}
                                    align={'left'}
                                >
                                    {subTitle}
                                </Text>
                                <Text
                                    variant={'h4'}
                                    color={Color.mainBlack}
                                    align={'left'}
                                >
                                    {title}
                                </Text>
                            </Styled.TextBlock>
                            <Styled.AbbrBlock color={color}>
                                {abbr}
                            </Styled.AbbrBlock>
                        </Styled.HeaderWrapper>
                        <Styled.SliderWrapper>
                            <Slider
                                value={sliderValue}
                                color={color}
                                cantEdit={false}
                                setCurrentValue={onChangeHandler}
                            />
                            <Styled.Level
                                variant={'body1'}
                                color={Color.secondaryGray}
                            >
                                {sliderValue} Ур
                            </Styled.Level>
                        </Styled.SliderWrapper>
                    </Styled.EditBlock>
                </Styled.Menu>
            </Styled.Container>
        );
    }
);
