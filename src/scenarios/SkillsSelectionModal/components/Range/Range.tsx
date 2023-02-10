import { faker } from '@faker-js/faker';
import { RANGE_VALUES } from '@scenarios/SkillsSelectionModal/constants';
import Color, { KeysOfColor } from '@ui/assets/color';
import {
    ChangeEventHandler,
    FC,
    memo,
    useCallback,
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
};

export const Range: FC<RangeProps> = memo(
    ({ min = RANGE_VALUES.min, max = RANGE_VALUES.max, name, color }) => {
        const [selectedValue, setSelectedValue] = useState('');
        const radioHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
            (event) => {
                const value = event.currentTarget.value;
                setSelectedValue(value);
            },
            []
        );

        const rangeItems = useMemo(() => {
            const itemsArray = [];
            const rowName = faker.datatype.uuid(); // будет name
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
        }, [color, max, min, radioHandler, selectedValue]);

        return <Styled.Range>{rangeItems}</Styled.Range>;
    }
);
