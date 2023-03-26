import { Role, User } from '@common/models';
import { faker } from '@faker-js/faker';

import { makeSkillTypesMock } from './SkillType';

export const makeStudentMock = (): User => {
    faker.setLocale('ru');
    return {
        id: faker.datatype.uuid(),
        role: Role.STUDENT,
        fullName: faker.name.fullName(),
        firstName: faker.name.firstName(),
        secondName: faker.name.middleName(),
        studentPatronymic: faker.name.lastName(),
        nameOrganization: faker.company.name(),
        about: faker.lorem.sentences(),
        companyDescription: faker.lorem.sentences(),
        nameSite: faker.internet.domainName(),
        position: faker.name.jobTitle(),
        experience: faker.lorem.sentences(),
        education: faker.lorem.sentences(),
        phone: faker.phone.number(),
        mail: faker.internet.email(),
        city: faker.address.city(),
        skillTypes: makeSkillTypesMock(),
    };
};
