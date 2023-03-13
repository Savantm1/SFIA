import { getDefaultRequiredField } from '@common/validation/utils/getDefaultRequiredField';

export const inputValidationOptions = {
    fields: {
        secondName: getDefaultRequiredField('secondName', 'Фамилия'),
        firstName: getDefaultRequiredField('firstName', 'Имя'),
        studentPatronymic: getDefaultRequiredField(
            'studentPatronymic',
            'Отчество',
            {
                required: false,
            }
        ),
        birthday: getDefaultRequiredField('birthday', 'Дата рождения', {
            required: false,
        }),
        education: getDefaultRequiredField('education', 'Образование', {
            required: false,
        }),
        phone: {
            ...getDefaultRequiredField('phone', 'Номер телефона', {
                pattern: {
                    value: '^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$',
                    message: 'Номер указан не корректно',
                },
            }),
        },
        mail: {
            ...getDefaultRequiredField(
                'mail',
                'E-mail',
                {
                    required: false,
                }
                //     {
                //     pattern: {
                //         value: '[a-z0-9]+@[a-z]+.[a-z]{2,3}',
                //         message: 'E-mail указан не корректно',
                //     },
                // }
            ),
        },
        studentDescription: {
            placeholder: 'О себе',
        },
    },
};
