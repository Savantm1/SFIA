import { Checkbox as CheckboxUI } from '@mui/material';
import { ChangeEvent, FC, memo, useEffect, useState } from 'react';

type CheckboxProps = {
    color?: string;
    disabled?: boolean;
    size?: number;
    required?: boolean;
    checked: boolean;
    onChangeHandler: (value: boolean) => void;
};

export const Checkbox: FC<CheckboxProps> = memo(
    ({
        color = 'black',
        disabled,
        size = 24,
        required,
        onChangeHandler,
        checked,
    }) => {
        const [isChecked, setIsChecked] = useState(checked);

        useEffect(() => setIsChecked(checked), [checked]);
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
                    padding: '0px',
                    paddingRight: '4px',
                    color: color,
                    '&.Mui-checked': {
                        color: color,
                    },
                    '& .MuiSvgIcon-root': { fontSize: size },
                }}
            />
        );
    }
);
