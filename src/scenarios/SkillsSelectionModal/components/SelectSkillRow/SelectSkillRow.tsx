import { RANGE_VALUES } from '@scenarios/SkillsSelectionModal/constants';
import Color, { KeysOfColor } from '@ui/assets/color';
import { Checkbox } from '@ui/components/Checkbox';
import { Text } from '@ui/components/Text/';
import React, { FC, memo, useState } from 'react';

import { Range } from '../Range/Range';
import { Styled } from './styled';

type SelectSkillRowProps = {
    text: string;
    min: number;
    max: number;
    isSelected?: boolean;
    color: (typeof Color)[KeysOfColor];
    setIsSelected: any;
};

export const SelectSkillRow: FC<SelectSkillRowProps> = memo(
    ({ text, min = RANGE_VALUES.min, max = RANGE_VALUES.max, color }) => {
        const [isSelected, setIsSelected] = useState(false);

        return (
            <Styled.Row>
                <Styled.LeftSide>
                    <Checkbox
                        size={18}
                        checked={isSelected}
                        onChangeHandler={(value) => setIsSelected(value)}
                        color={isSelected ? color : Color.mainBlack}
                    />

                    <Text
                        variant={'h6'}
                        align={'left'}
                        color={isSelected ? color : Color.mainBlack}
                    >
                        {text}
                    </Text>
                </Styled.LeftSide>
                <Range name={text} min={min} max={max} color={color} />
            </Styled.Row>
        );
    }
);
