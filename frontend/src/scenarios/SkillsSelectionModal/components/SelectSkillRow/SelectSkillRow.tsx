import { RANGE_VALUES } from '@scenarios/SkillsSelectionModal/constants';
import Color, { KeysOfColor } from '@ui/assets/color';
import { Checkbox } from '@ui/components/Checkbox';
import { Text } from '@ui/components/Text/';
import { FC, memo, useCallback } from 'react';

import { Range } from '../Range/Range';
import { Styled } from './styled';

type SelectSkillRowProps = {
    text: string;
    min: number;
    max: number;
    isSelected: boolean;
    color: (typeof Color)[KeysOfColor];
    addSkillToStore: any;
    removeSkillFromStore: any;
};

export const SelectSkillRow: FC<SelectSkillRowProps> = memo(
    ({
        text,
        min = RANGE_VALUES.min,
        max = RANGE_VALUES.max,
        color,
        addSkillToStore,
        removeSkillFromStore,
        isSelected,
    }) => {
        const setValueSkillHandler = (value: string | number) => {
            addSkillToStore(value);
        };
        const changeHandler = useCallback(
            (isSelect: boolean) => {
                if (isSelect) {
                    addSkillToStore(min);
                } else {
                    removeSkillFromStore();
                }
            },
            [addSkillToStore, min, removeSkillFromStore]
        );
        return (
            <Styled.Row>
                <Styled.LeftSide>
                    <Checkbox
                        size={18}
                        checked={isSelected}
                        onChangeHandler={changeHandler}
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
                <Range
                    name={text}
                    min={min}
                    max={max}
                    color={color}
                    isSelectedSkill={isSelected}
                    setValueSkillHandler={setValueSkillHandler}
                />
            </Styled.Row>
        );
    }
);
