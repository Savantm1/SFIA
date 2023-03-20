import { faker } from '@faker-js/faker';
import { RANGE_VALUES } from '@scenarios/SkillsSelectionModal/constants';
import Color, { KeysOfColor } from '@ui/assets/color';
import {
    ChangeEventHandler,
    Dispatch,
    FC,
    memo,
    SetStateAction,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';

import { RangeItem } from '../RangeItem/RangeItem';
import { Styled } from './styled';

type RangeProps = {
    min?: number;
    max?: number;
    name: string; //пока оставлю
    color: (typeof Color)[KeysOfColor];
    setIsSelectedSkill: Dispatch<SetStateAction<boolean>>;
    isSelectedSkill: boolean;
    setValueSkillHandler: (value: string | number) => void;
};

export const Range: FC<RangeProps> = memo(
    ({
        min = RANGE_VALUES.min,
        max = RANGE_VALUES.max,
        name,
        color,
        setIsSelectedSkill,
        isSelectedSkill,
        setValueSkillHandler,
    }) => {
        const [selectedValue, setSelectedValue] = useState('');
        const radioHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
            (event) => {
                const value = event.currentTarget.value;
                setSelectedValue(value);
                setValueSkillHandler(value);
                setIsSelectedSkill(true);
            },
            [setIsSelectedSkill, setValueSkillHandler]
        );

        useEffect(() => {
            isSelectedSkill
                ? setSelectedValue(selectedValue || min.toString())
                : setSelectedValue('');
        }, [isSelectedSkill, min, selectedValue]);
        const rangeItems = useMemo(() => {
            const itemsArray = [];
            const rowName = name;
            for (let i = RANGE_VALUES.min; i <= RANGE_VALUES.max; i++) {
                itemsArray.push(
                    i < min || i > max ? (
                        <RangeItem key={faker.datatype.uuid()} empty={true} />
                    ) : (
                        <RangeItem
                            key={faker.datatype.uuid()}
                            rowName={rowName}
                            color={color}
                            isSelected={+selectedValue == i}
                            value={i.toString()}
                            onChange={radioHandler}
                        />
                    )
                );
            }
            return itemsArray;
        }, [color, max, min, name, radioHandler, selectedValue]);

        return <Styled.Range>{rangeItems}</Styled.Range>;
    }
);
