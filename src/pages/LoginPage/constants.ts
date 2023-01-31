import { getDefaultRequiredField } from '@common/validation/utils/getDefaultRequiredField';

export const inputValidationOptions = {
    fields: {
        phone: {
            ...getDefaultRequiredField('phone', 'Номер телефона', {
                pattern: {
                    value: '^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$',
                    message: 'Номер указан некорректно',
                },
            }),
        },
    },
};
