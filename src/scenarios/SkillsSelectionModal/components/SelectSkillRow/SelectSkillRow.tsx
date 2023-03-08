import { RANGE_VALUES } from '@scenarios/SkillsSelectionModal/constants';
import { ModalSkillsContext } from '@scenarios/SkillsSelectionModal/context/context';
import Color, { KeysOfColor } from '@ui/assets/color';
import { Checkbox } from '@ui/components/Checkbox';
import { Text } from '@ui/components/Text/';
import React, { FC, memo, useCallback, useContext, useState } from 'react';

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
        const [isSelectedSkill, setIsSelectedSkill] = useState(false);
        const { addSelectedSkillToStore, removeSelectedSkillFromStore } =
            useContext(ModalSkillsContext);

        const changeHandler = useCallback(
            (value: boolean) => {
                if (value) {
                    addSelectedSkillToStore({ skillText: text });
                } else {
                    removeSelectedSkillFromStore({ skillText: text });
                }
                setIsSelectedSkill(value);
            },
            [addSelectedSkillToStore, removeSelectedSkillFromStore, text]
        );
        return (
            <Styled.Row>
                <Styled.LeftSide>
                    <Checkbox
                        size={18}
                        checked={isSelectedSkill}
                        onChangeHandler={changeHandler}
                        color={isSelectedSkill ? color : Color.mainBlack}
                    />

                    <Text
                        variant={'h6'}
                        align={'left'}
                        color={isSelectedSkill ? color : Color.mainBlack}
                    >
                        {text}
                    </Text>
                </Styled.LeftSide>
                <Range
                    name={text}
                    min={min}
                    max={max}
                    color={color}
                    isSelectedSkill={isSelectedSkill}
                    setIsSelectedSkill={setIsSelectedSkill}
                />
            </Styled.Row>
        );
    }
);
