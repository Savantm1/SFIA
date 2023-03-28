import { getDefaultRequiredField } from '@common/validation/utils/getDefaultRequiredField';

export const inputValidationOptions = {
    fields: {
        secondName: getDefaultRequiredField('secondName', 'Фамилия'),
        firstName: getDefaultRequiredField('firstName', 'Имя'),
        patronymic: getDefaultRequiredField('patronymic', 'Отчество'),
        birthday: getDefaultRequiredField('birthday', 'Дата рождения'),
        position: getDefaultRequiredField('position', 'Должность'),
        experience: getDefaultRequiredField('experience', 'Опыт'),
        education: getDefaultRequiredField('education', 'Образование'),
        phone: {
            ...getDefaultRequiredField('phone', 'Номер телефона', {
                pattern: {
                    value: '^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$',
                    message: 'Номер указан не корректно',
                },
            }),
        },
        email: {
            ...getDefaultRequiredField('email', 'E-mail', {
                pattern: {
                    value: '[a-z0-9]+@[a-z]+.[a-z]{2,3}',
                    message: 'E-mail указан не корректно',
                },
            }),
        },
    },
};
