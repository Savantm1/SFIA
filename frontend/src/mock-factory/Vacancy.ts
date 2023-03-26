import { Vacancy } from '@common/models';
import { faker } from '@faker-js/faker';

import { makeSkillTypesMock } from './SkillType';

export const makeVacancyMock = (): Vacancy => {
    faker.setLocale('ru');
    return {
        id: faker.datatype.uuid(),
        userId: '1',
        title: faker.name.jobTitle(),
        salary: faker.datatype.number({
            min: 50000,
            max: 150000,
            precision: 1000,
        }),
        experience: `${faker.datatype.number({
            min: 1,
            max: 3,
        })}-${faker.datatype.number({ min: 4, max: 10 })}`,
        employment: faker.helpers.arrayElement([
            'Полная занятость',
            'Частичная занятость',
        ]),
        schedule: faker.helpers.arrayElement([
            'Удаленная работа',
            'Гибрид',
            'Офис',
        ]),
        responsibilities: [
            faker.lorem.sentence(5),
            faker.lorem.sentence(6),
            faker.lorem.sentence(7),
        ].join(';'),
        requirements: [
            faker.lorem.sentence(5),
            faker.lorem.sentence(6),
            faker.lorem.sentence(7),
        ].join(';'),
        conditions: [
            faker.lorem.sentence(5),
            faker.lorem.sentence(6),
            faker.lorem.sentence(7),
        ].join(';'),
        description: faker.lorem.sentence(7),
        fullDescription: faker.lorem.sentence(50),
        skillTypes: makeSkillTypesMock(),
        views: faker.datatype.number({ min: 0, max: 1000 }),
        responses: faker.datatype.number({ min: 0, max: 1000 }),
    };
};
