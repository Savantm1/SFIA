import { faker } from '@faker-js/faker';

export const SECTION_MOCK = {
    title: 'Стратегия и архитектураasd',
    subCategories: [
        {
            title: 'Стратегическое планроване',
            items: [
                {
                    value: faker.random.words(2),
                    min: 3,
                    max: 5,
                    isChecked: false,
                },
                {
                    value: faker.random.words(2),
                    min: 1,
                    max: 7,
                    isChecked: false,
                },
                {
                    value: faker.random.words(2),
                    min: 2,
                    max: 5,
                    isChecked: false,
                },
                {
                    value: faker.random.words(2),
                    min: 6,
                    max: 7,
                    isChecked: false,
                },
            ],
        },
        {
            title: 'Стратегическое планрованеzzs',
            items: [
                {
                    value: faker.random.words(2),
                    min: 3,
                    max: 5,
                    isChecked: false,
                },
                {
                    value: faker.random.words(2),
                    min: 1,
                    max: 7,
                    isChecked: false,
                },
                {
                    value: faker.random.words(2),
                    min: 2,
                    max: 5,
                    isChecked: false,
                },
                {
                    value: faker.random.words(2),
                    min: 6,
                    max: 7,
                    isChecked: false,
                },
            ],
        },
        {
            title: 'Стратегическое планроване2',
            items: [
                {
                    value: faker.random.words(2),
                    min: 3,
                    max: 5,
                    isChecked: false,
                },
                {
                    value: faker.random.words(2),
                    min: 1,
                    max: 7,
                    isChecked: false,
                },
                {
                    value: faker.random.words(2),
                    min: 2,
                    max: 5,
                    isChecked: false,
                },
                {
                    value: faker.random.words(2),
                    min: 6,
                    max: 7,
                    isChecked: false,
                },
                {
                    value: faker.random.words(2),
                    min: 3,
                    max: 5,
                    isChecked: false,
                },
                {
                    value: faker.random.words(2),
                    min: 1,
                    max: 7,
                    isChecked: false,
                },
                {
                    value: faker.random.words(2),
                    min: 2,
                    max: 5,
                    isChecked: false,
                },
                {
                    value: faker.random.words(2),
                    min: 6,
                    max: 7,
                    isChecked: false,
                },
            ],
        },
    ],
};

export const PAGE_DATA_MOCK = [
    SECTION_MOCK,
    SECTION_MOCK,
    SECTION_MOCK,
    SECTION_MOCK,
    SECTION_MOCK,
    SECTION_MOCK,
];
