import { Styled } from '@ui/components/TextInput/styled';
import { ChangeEvent, FC, memo, useState } from 'react';

type TextInputProps = {
    type?: string;
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
    pattern?: string;
    className?: string;
};

export const TextInput: FC<TextInputProps> = memo(
    ({
        className,
        pattern,
        type = 'text',
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
            onChange(evt.target.value);
        };

        return (
            <Styled.Wrapper className={className}>
                <Styled.Input
                    pattern={pattern}
                    maxLength={maxLength}
                    isError={isError}
                    id={id}
                    form={form}
                    name={name}
                    type={type}
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
