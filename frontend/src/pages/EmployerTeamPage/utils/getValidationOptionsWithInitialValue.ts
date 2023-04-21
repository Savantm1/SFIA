import { Member } from '@common/models/Member';

import { inputValidationOptions } from '../components/MemberFormModal/constants';

export const getValidationOptionsWithInitialValue = (member: Member) => {
    const fieldsInitialValue = Object.keys(
        inputValidationOptions.fields
    ).reduce((acc, field) => {
        return {
            ...acc,
            [field]: {
                ...inputValidationOptions.fields[field],
                initialValue: member[field as keyof Member],
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
