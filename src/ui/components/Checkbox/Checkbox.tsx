import { ChangeEvent, FC, memo, useState } from 'react';
import { Checkbox as CheckboxUI } from '@mui/material';
import Color, { KeysOfColor } from '@ui/assets/color';
// import { Checkbox } from '@mui/material';
import { KeysOfSize, Size } from '@ui/assets/size';

type CheckboxProps = {
    color?: (typeof Color)[KeysOfColor];
    disabled?: boolean;
    size?: (typeof Size)[KeysOfSize];
    value?: any;
    required?: boolean;
    checked: boolean;
    onChangeHandler: (value: boolean) => void;
};

export const Checkbox: FC<CheckboxProps> = memo(
    ({
        color,
        disabled,
        size = Size.size_24,
        value,
        required,
        onChangeHandler,
    }) => {
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
