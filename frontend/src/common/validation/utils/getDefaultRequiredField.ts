export type FieldType = {
    name: string;
    placeholder: string;
    initialValue?: string;
    validations?: object;
};

type getDefaultRequiredFieldType = (
    field: FieldType['name'],
    placeholder: FieldType['placeholder'],
    validations?: FieldType['validations']
) => FieldType;

export const getDefaultRequiredField: getDefaultRequiredFieldType = (
    field,
    placeholder,
    validations
) => {
    return {
        name: field,
        placeholder: placeholder,
        validations: {
            required: {
                message: `Укажите ${placeholder.toLowerCase()}`,
            },
            ...validations,
        },
    };
};
