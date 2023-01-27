import { ChangeEvent, FC, memo, useState } from 'react';
import { Styled } from '@ui/components/TextInput/styled';

type TextInputProps = {
    id?: string;
    value: string;
    color?: string;
    onChange: (value: string) => void;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    isError?: boolean;
    errorText?: string;
    name?: string;
    form?: string;
    maxLength?: number;
};

export const TextInput: FC<TextInputProps> = memo(
    ({
        id,
        placeholder,
        disabled,
        required,
        value,
        color,
        onChange,
        isError,
        errorText,
        form,
        name,
        maxLength,
    }) => {
        const [textValue, setTextValue] = useState(value);

        const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
            setTextValue(evt.target.value);
            onChange(textValue);
        };

        return (
            <Styled.Wrapper>
                <Styled.Input
                    maxLength={maxLength}
                    isError={isError}
                    id={id}
                    form={form}
                    name={name}
                    type="text"
                    value={textValue}
                    color={color}
                    onChange={onChangeHandler}
                    required={required}
                    disabled={disabled}
                    placeholder={placeholder}
                />
                {isError && <Styled.ErrorText>{errorText}</Styled.ErrorText>}
            </Styled.Wrapper>
        );
    }
);
