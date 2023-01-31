export const getDefaultRequiredField = (
    field: string,
    placeholder: string,
    validations?: object
) => {
    return {
        placeholder: placeholder,
        validations: {
            required: {
                message: `Укажите ${placeholder.toLowerCase()}`,
            },
            ...validations,
        },
    };
};
