import { SkillType } from '@common/models';
import { faker } from '@faker-js/faker';
import Color from '@ui/assets/color';

export const makeSkillTypesMock = (): SkillType[] => {
    faker.setLocale('ru');
    return [
        {
            title: 'ITSP',
            subtitle: `${faker.datatype.number({ min: 1, max: 9 })} ур`,
            value: faker.datatype.number({ min: 40, max: 100 }),
            color: Color.fuxy,
        },
        {
            title: 'PEMT',
            subtitle: `${faker.datatype.number({ min: 1, max: 9 })} ур`,
            value: faker.datatype.number({ min: 40, max: 100 }),
            color: Color.deepBlue,
        },
        {
            title: 'SUPP',
            subtitle: `${faker.datatype.number({ min: 1, max: 9 })} ур`,
            value: faker.datatype.number({ min: 40, max: 100 }),
            color: Color.green,
        },
        {
            title: 'DCMA',
            subtitle: `${faker.datatype.number({ min: 1, max: 9 })} ур`,
            value: faker.datatype.number({ min: 40, max: 100 }),
            color: Color.orange,
        },
    ];
};
