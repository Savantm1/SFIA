import { Role, User } from '@common/models';
import { faker } from '@faker-js/faker';

import { makeSkillTypesMock } from './SkillType';

export const makeUserMock = (): User => {
    faker.setLocale('ru');
    return {
        id: faker.datatype.uuid(),
        role: Role.EMPLOYER,
        fullName: faker.name.fullName(),
        nameOrganization: faker.company.name(),
        about: faker.lorem.sentences(),
        companyDescription: faker.lorem.sentences(),
        nameSite: faker.internet.domainName(),
        position: faker.name.jobTitle(),
        phone: faker.phone.number(),
        mail: faker.internet.email(),
        city: faker.address.city(),
        skillTypes: makeSkillTypesMock(),
    };
};
