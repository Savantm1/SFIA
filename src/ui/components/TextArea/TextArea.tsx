import { ChangeEvent, ChangeEventHandler, FC, memo, useState } from 'react';
import { Styled } from '@ui/components/TextArea/styled';

type TextAreaProps = {
  id?: string;
  value: string;
  color?: string;
  onChange: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  isError?:boolean;
  errorText?: string;
  rows?: number;
  form?: string;
  maxLength?: number;
  name?: string;
}

export const TextArea: FC<TextAreaProps> = memo((
  {
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
    rows= 5,
  }) => {
  const [textValue, setTextValue] = useState(value);
  const [counter,setCounter] = useState(maxLength);
  const onChangeHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const diff = maxLength - evt.target.value.length;
    console.log(evt.target.value.length,maxLength);
    setCounter(diff);
    setTextValue(evt.target.value);
    onChange(textValue);
  }

  return (
    <Styled.Wrapper>
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
      <Styled.Counter isError={isError}>{counter}</Styled.Counter>
    </Styled.Wrapper>
  );
});