import { Vacancy } from '@common/models';
import { faker } from '@faker-js/faker';

import { makeSkillTypesMock } from './SkillType';

export const makeVacancyMock = (): Vacancy => {
    faker.setLocale('ru');
    return {
        id: faker.datatype.uuid(),
        city: faker.address.city(),
        company: faker.company.name(),
        title: faker.name.jobTitle(),
        description: faker.lorem.sentence(7),
        skillTypes: makeSkillTypesMock(),
        views: faker.datatype.number({ min: 0, max: 1000 }),
        responses: faker.datatype.number({ min: 0, max: 1000 }),
    };
};
