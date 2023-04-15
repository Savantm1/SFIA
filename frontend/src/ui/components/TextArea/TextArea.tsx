import { Styled } from '@ui/components/TextArea/styled';
import { ChangeEvent, FC, memo, useState } from 'react';

type TextAreaProps = {
    id?: string;
    value: string;
    color?: string;
    onChange: (value: string) => void;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    isError?: boolean;
    errorText?: string;
    rows?: number;
    form?: string;
    maxLength?: number;
    name?: string;
    className?: string;
};

export const TextArea: FC<TextAreaProps> = memo(
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
        name,
        maxLength = 200,
        form,
        rows = 5,
        className,
    }) => {
        const [textValue, setTextValue] = useState(value);
        const [counter, setCounter] = useState(maxLength);
        const onChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
            const diff = maxLength - evt.target.value.length;
            setCounter(diff);
            setTextValue(evt.target.value);
            onChange(evt.target.value);
        };

        return (
            <Styled.Wrapper className={className}>
                <Styled.TextArea
                    form={form}
                    name={name}
                    rows={rows}
                    isError={isError}
                    id={id}
                    value={textValue}
                    color={color}
                    onChange={onChangeHandler}
                    required={required}
                    disabled={disabled}
                    placeholder={placeholder}
                    maxLength={maxLength}
                />
                {isError && <Styled.ErrorText>{errorText}</Styled.ErrorText>}
                {/*<Styled.Counter isError={isError}>{counter}</Styled.Counter>*/}
            </Styled.Wrapper>
        );
    }
);
