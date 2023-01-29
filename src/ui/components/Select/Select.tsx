import { FC, memo, useMemo, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { Styled } from '@ui/components/Select/styled';
import { SelectProps } from '@ui/components/Select/types';

export const Select: FC<SelectProps> = memo(
    ({ options, defaultValue = options[0].value, placeholder, onSelect }) => {
        const [selectedValue, setSelectedValue] = useState(
            placeholder ? '' : defaultValue
        );

        const handleChange = (event: SelectChangeEvent<unknown>): void => {
            const value = event.target.value as string;
            setSelectedValue(value);
            onSelect(value);
        };

        const optionsList = useMemo(
            () =>
                options.map(({ value, text }) => {
                    return (
                        <Styled.Option key={value} value={value}>
                            {text}
                        </Styled.Option>
                    );
                }),
            [options]
        );

        return (
            <Styled.Select
                fullWidth
                displayEmpty
                MenuProps={{
                    style: { marginTop: 6, marginLeft: -8, borderRadius: 8 },
                }}
                value={selectedValue}
                onChange={handleChange}
            >
                {placeholder && (
                    <Styled.PlaceholderOption value="">
                        {placeholder}
                    </Styled.PlaceholderOption>
                )}
                {optionsList}
            </Styled.Select>
        );
    }
);
