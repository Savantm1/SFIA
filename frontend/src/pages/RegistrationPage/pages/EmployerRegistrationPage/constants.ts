import { getDefaultRequiredField } from '@common/validation/utils/getDefaultRequiredField';

export const inputValidationOptions = {
    fields: {
        nameOrganization: getDefaultRequiredField(
            'nameOrganization',
            'Название компании',
            { required: true }
        ),
        phone: {
            ...getDefaultRequiredField('phone', 'Номер телефона', {
                pattern: {
                    value: '^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$',
                    message: 'Номер указан некорректно',
                },
            }),
        },
        mail: {
            ...getDefaultRequiredField(
                'mail',
                'E-mail'
                //     {
                //     pattern: {
                //         value: '[a-z0-9]+@[a-z]+.[a-z]{2,3}',
                //         message: 'E-mail указан некорректно',
                //     },
                // }
            ),
        },
        nameSite: {
            placeholder: 'Сайт',
        },
        companyDescription: {
            placeholder: 'О Компании',
        },
    },
};
