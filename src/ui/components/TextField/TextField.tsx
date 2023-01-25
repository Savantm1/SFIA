import { FC, memo } from 'react';
import { Styled } from '@ui/components/TextField/styled';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';

type TextFieldProps = {
      value?: string;
      onChange: OutlinedInputProps['onChange'];
      disabled?: boolean;
      required?: boolean;
      defaultValue?: string;
      error?: boolean;
      multiline?: boolean;
      maxRows?: number;
      placeholder?: string;
      rows?: number;
      label?: string;
      fullWidth?: boolean;
};

export const TextField: FC<TextFieldProps> = memo((
  {
        fullWidth,
        value,
        rows,
        multiline,
        placeholder = '',
        error, defaultValue,
        label,
        onChange,
        disabled = false,
        required = false
  }:TextFieldProps) => {
      return (<>
                  <Styled.TextField
                    value={value}
                    rows={rows}
                    multiline={multiline}
                    placeholder={placeholder}
                    onChange={onChange}
                    error={error}
                    defaultValue={defaultValue}
                    label={label}
                    variant={'outlined'}
                    fullWidth={fullWidth}
                    disabled={disabled}
                    required={required}/>
            </>)
});