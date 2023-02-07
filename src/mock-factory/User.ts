import { Role, User } from '@common/models';
import { faker } from '@faker-js/faker';

export const makeUserMock = (): User => {
    faker.setLocale('ru');
    return {
        id: faker.datatype.uuid(),
        role: Role.EMPLOYER,
        fullName: faker.name.fullName(),
        company: faker.company.name(),
        about: faker.lorem.sentences(),
        site: faker.internet.domainName(),
        position: faker.name.jobTitle(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        city: faker.address.city(),
    };
};
