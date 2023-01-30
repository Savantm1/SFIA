import { Checkbox as CheckboxUI } from '@mui/material';
import Color, { KeysOfColor } from '@ui/assets/color';
import { ChangeEvent, FC, memo, useState } from 'react';

type CheckboxProps = {
    color?: (typeof Color)[KeysOfColor];
    disabled?: boolean;
    size?: number;
    value?: any;
    required?: boolean;
    checked: boolean;
    onChangeHandler: (value: boolean) => void;
};

export const Checkbox: FC<CheckboxProps> = memo(
    ({ color, disabled, size = 24, value, required, onChangeHandler }) => {
        const [isChecked, setIsChecked] = useState(value);

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            setIsChecked(event.target.checked);
            onChangeHandler(event.target.checked);
        };

        return (
            <CheckboxUI
                required={required}
                checked={isChecked}
                disabled={disabled}
                onChange={handleChange}
                sx={{
                    color,
                    '&.Mui-checked': {
                        color,
                    },
                    '& .MuiSvgIcon-root': { fontSize: size },
                }}
            />
        );
    }
);
