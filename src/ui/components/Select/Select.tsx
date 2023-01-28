import { FC, memo, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { Styled } from '@ui/components/Select/styled';
import { SelectProps } from '@ui/components/Select/types';

export const Select: FC<SelectProps> = memo(
    ({ options, defaultValue, placeholder, onSelect }) => {
        const [selectedValue, setSelectedValue] = useState(
            placeholder ? 'placeholder' : defaultValue || options[0].value
        );

        const handleChange = ({ target: { value } }: SelectChangeEvent) => {
            setSelectedValue(value);
            onSelect(value);
        };

        const menuItems = options.map(({ value, text }) => {
            return (
                <Styled.Option key={value} value={value}>
                    {text}
                </Styled.Option>
            );
        });

        return (
            <Styled.SelectComponent
                fullWidth
                MenuProps={{
                    style: { marginTop: 6, marginLeft: -8, borderRadius: 8 },
                }}
                value={selectedValue}
                onChange={handleChange}
            >
                {placeholder && (
                    <Styled.Option value="placeholder">
                        {placeholder}
                    </Styled.Option>
                )}
                {menuItems}
            </Styled.SelectComponent>
        );
    }
);
