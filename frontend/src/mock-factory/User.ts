import { Role, User } from '@common/models';
import { faker } from '@faker-js/faker';

import { makeSkillTypesMock } from './SkillType';

export const makeUserMock = (): User => {
    faker.setLocale('ru');
    return {
        id: faker.datatype.uuid(),
        role: Role.EMPLOYER,
        fullName: faker.name.fullName(),
        firstName: faker.name.firstName(),
        secondName: faker.name.middleName(),
        studentPatronymic: faker.name.lastName(),
        nameOrganization: faker.company.name(),
        about: faker.lorem.sentences(),
        experience: faker.lorem.sentences(),
        education: faker.lorem.sentences(),
        companyDescription: faker.lorem.sentences(),
        nameSite: faker.internet.domainName(),
        position: faker.name.jobTitle(),
        phone: faker.phone.number(),
        mail: faker.internet.email(),
        city: faker.address.city(),
        skillTypes: makeSkillTypesMock(),
    };
};
