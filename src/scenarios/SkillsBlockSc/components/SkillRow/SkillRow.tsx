import Color, { KeysOfColor } from '@ui/assets/color';
import { Icons } from '@ui/assets/icons';
import { Slider } from '@ui/components/Slider';
import { FC, memo } from 'react';

import { Styled } from './styled';

export type SkillRowProps = {
    title: string;
    color?: (typeof Color)[KeysOfColor];
    value: number;
};
export const SkillRow: FC<SkillRowProps> = memo(
    ({ title, color = Color.fuxy, value = 5 }) => {
        return (
            <Styled.Container>
                <Styled.Block>
                    <Styled.Title align={'left'} variant={'h5'} color={color}>
                        {title}
                    </Styled.Title>
                    <Styled.SliderWrapper>
                        <Slider value={value} color={color} />
                        <Styled.Level
                            variant={'body1'}
                            color={Color.secondaryGray}
                        >
                            {value} Ур
                        </Styled.Level>
                    </Styled.SliderWrapper>
                </Styled.Block>
                <Styled.MenuButton iconName={Icons.menu} onClick={() => {}} />
            </Styled.Container>
        );
    }
);
