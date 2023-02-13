import {
    FieldType,
    getDefaultRequiredField,
} from '@common/validation/utils/getDefaultRequiredField';

type InputValidationOptionsType = {
    fields: Record<string, FieldType>;
};

export const inputValidationOptions: InputValidationOptionsType = {
    fields: {
        title: getDefaultRequiredField('title', 'Название вакансии'),
        experience: getDefaultRequiredField('experience', 'Опыт'),
        employment: getDefaultRequiredField('employment', 'Занятость'),
        schedule: getDefaultRequiredField('schedule', 'График работы'),
        responsibilities: getDefaultRequiredField(
            'responsibilities',
            'Обязанности'
        ),
        requirements: getDefaultRequiredField('requirements', 'Требования'),
        conditions: getDefaultRequiredField('conditions', 'Условия'),
    },
};
