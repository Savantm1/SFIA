import { getDefaultRequiredField } from '@common/validation/utils/getDefaultRequiredField';

export const inputValidationOptions = {
    fields: {
        vacancy_name: getDefaultRequiredField(
            'vacancy_name',
            'Название вакансии'
        ),
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
