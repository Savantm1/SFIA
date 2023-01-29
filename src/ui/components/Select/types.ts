export type SelectOption = Record<'value' | 'text', string>;

export type SelectProps = {
    options: SelectOption[];
    defaultValue?: SelectOption['value'];
    placeholder?: string;
    onSelect: (value: SelectOption['value']) => void;
};
