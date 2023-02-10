import { faker } from '@faker-js/faker';
import { ChangeEventHandler, FC, memo } from 'react';

import { Styled } from './styled';

type RangeItemProps = {
    rowName?: string;
    color?: string;
    isSelected?: boolean;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    empty?: boolean;
};
export const RangeItem: FC<RangeItemProps> = memo(
    ({
        empty = false,
        rowName,
        color = 'red',
        isSelected = false,
        value = '123',
        onChange,
    }) => {
        if (empty) return <Styled.EmptyContainer />;
        const idValue = faker.datatype.uuid();
        return (
            <Styled.Container
                color={color}
                isSelected={isSelected}
                htmlFor={idValue}
            >
                <Styled.Value>{value}</Styled.Value>
                <Styled.Radio
                    id={idValue}
                    onChange={onChange}
                    name={rowName}
                    type={'radio'}
                    value={value}
                    checked={isSelected}
                />
            </Styled.Container>
        );
    }
);
