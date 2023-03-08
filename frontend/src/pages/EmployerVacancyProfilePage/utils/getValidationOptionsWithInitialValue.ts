import { Vacancy } from '@common/models';
import { inputValidationOptions } from '@pages/EmployerVacancyPage/constants';

export const getValidationOptionsWithInitialValue = (vacancy: Vacancy) => {
    const fieldsInitialValue = Object.keys(
        inputValidationOptions.fields
    ).reduce((acc, field) => {
        return {
            ...acc,
            [field]: {
                ...inputValidationOptions.fields[field],
                initialValue: vacancy[field as keyof Vacancy],
            },
        };
    }, {});

    return {
        ...inputValidationOptions,
        fields: {
            ...inputValidationOptions.fields,
            ...fieldsInitialValue,
        },
    };
};
