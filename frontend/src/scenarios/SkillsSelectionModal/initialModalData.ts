export type InitialModalDataType = {
    mainColor: string;
    secondaryColor: string;
    categoryTitle: string;
    subCategories: {
        subcategoryTitle: string;
        items: {
            text: string;
            value?: number;
            min: number;
            max: number;
            isChecked: boolean;
        }[];
    }[];
}[];
export const initialModalData: InitialModalDataType = [
    {
        mainColor: '#B4104C',
        secondaryColor: '#FFC0D7',
        categoryTitle: 'Стратегия и архитектура',
        subCategories: [
            {
                subcategoryTitle: 'Стратегическое планирование',
                items: [
                    {
                        text: 'Стратегическое планирование',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Координация информационных систем',
                        value: undefined,
                        min: 5,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Информационное управление',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Корпоративная и бизнес-архитектура',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Архитектура решений',
                        value: undefined,
                        min: 3,
                        max: 6,
                        isChecked: false,
                    },
                    {
                        text: 'Инновации',
                        value: undefined,
                        min: 2,
                        max: 4,
                        isChecked: false,
                    },
                    {
                        text: 'Мониторинг новейших технологий',
                        value: undefined,
                        min: 3,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Исследование',
                        value: undefined,
                        min: 3,
                        max: 6,
                        isChecked: false,
                    },
                ],
            },
            {
                subcategoryTitle: 'Безопасность и конфиденциальность',
                items: [
                    {
                        text: 'Безопасность и конфиденциальность',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Информационное обеспечение',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Защита персональных данных',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Изучение уязвимости',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Изучение уязвимости',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                ],
            },
            {
                subcategoryTitle: 'Управление, риск и соблюдение требований',
                items: [
                    {
                        text: 'Управление ИТ управление ИТ',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Управление рисками',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Аудит',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Управление качеством',
                        value: undefined,
                        min: 4,
                        max: 7,
                        isChecked: false,
                    },
                ],
            },
        ],
    },
    {
        mainColor: '#BF9501',
        secondaryColor: '#FFF1C0',
        categoryTitle: 'Разработка и внедрение',
        subCategories: [
            {
                subcategoryTitle: 'Разработка систем',
                items: [
                    {
                        text: 'Управление продуктами',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Управление продуктами',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Проектирование системи',
                        value: undefined,
                        min: 4,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Управление разработкой систем',
                        value: undefined,
                        min: 3,
                        max: 7,
                        isChecked: false,
                    },
                ],
            },
            {
                subcategoryTitle: 'Данные и аналитика',
                items: [
                    {
                        text: 'Управление данными',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Моделирование и проектирование данных',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Проектирование базы данных',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Инжиниринг данных',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Администрирование базы данных',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Дата сайенс',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                ],
            },
            {
                subcategoryTitle: 'Управление контентом',
                items: [
                    {
                        text: 'Создание контентаи',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Публикация контента',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Управление знаниями',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                ],
            },
        ],
    },
    {
        mainColor: '#FC8616',
        secondaryColor: '#FFE9D4',

        categoryTitle: 'Взаимоотношения и взаимодействия',
        subCategories: [
            {
                subcategoryTitle:
                    'Управление отношениями с заинтересованными сторонами',
                items: [
                    {
                        text: 'Сорсинг',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Управление поставщиками',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Управление контрактами',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Управление взаимоотношениями',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Служба поддержки клиентов',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Бизнес администрирование',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: '',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                ],
            },
            {
                subcategoryTitle: 'Анализ изменений',
                items: [
                    {
                        text: 'Маркетинг',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },

                    {
                        text: 'Продажи',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },

                    {
                        text: 'Поддержка продаж',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                ],
            },
        ],
    },
    {
        mainColor: '#0E72AB',
        secondaryColor: '#C8EBFF',
        categoryTitle: 'Доставка и эксплуатация',
        subCategories: [
            {
                subcategoryTitle: 'Технологический менеджмент ',
                items: [
                    {
                        text: 'Управление технологическими услугами',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Поддержка приложения',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Инфраструктура ИТ',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Системное программное обеспечение',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                ],
            },
            {
                subcategoryTitle: 'Управление услугами',
                items: [
                    {
                        text: 'Управление технологическими услугами',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Управление каталогом услуг',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Управление доступностью',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Управление мощностями',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                ],
            },
            {
                subcategoryTitle: 'Услуги по обеспечению безопасности',
                items: [
                    {
                        text: 'Операции по обеспечению безопасности',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Оценка уязвимости',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Цифровая криминалистика',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Тестирование на проникновение',
                        value: undefined,
                        min: 3,
                        max: 6,
                        isChecked: false,
                    },
                ],
            },
        ],
    },
    {
        mainColor: '#138D0A',
        secondaryColor: '#CEFFCA',
        categoryTitle: 'Изменения и трансформация',
        subCategories: [
            {
                subcategoryTitle: 'Внедрение изменений',
                items: [
                    {
                        text: 'Управление портфелем',
                        value: undefined,
                        min: 5,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Управление программами',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Управление проектами',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Сопровождение программ и проектов',
                        value: undefined,
                        min: 3,
                        max: 6,
                        isChecked: false,
                    },
                ],
            },
            {
                subcategoryTitle: 'Анализ изменений',
                items: [
                    {
                        text: 'Анализ бизнес-ситуации',
                        value: undefined,
                        min: 3,
                        max: 6,
                        isChecked: false,
                    },
                    {
                        text: 'Оценка целесообразности',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Бизнес-моделирование',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Приемочные испытания',
                        value: undefined,
                        min: 3,
                        max: 6,
                        isChecked: false,
                    },
                ],
            },
            {
                subcategoryTitle: 'Планирование изменений',
                items: [
                    {
                        text: 'Улучшение бизнес - процессов',
                        value: undefined,
                        min: 3,
                        max: 6,
                        isChecked: false,
                    },
                    {
                        text: 'Развитие организационных возможностей',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Разработка организационной структуры',
                        value: undefined,
                        min: 3,
                        max: 5,
                        isChecked: false,
                    },
                    {
                        text: 'Управление органи-ми изменениями',
                        value: undefined,
                        min: 3,
                        max: 6,
                        isChecked: false,
                    },
                    {
                        text: 'Управление выгодами',
                        value: undefined,
                        min: 3,
                        max: 6,
                        isChecked: false,
                    },
                ],
            },
        ],
    },
    {
        mainColor: '#7208A8',
        secondaryColor: '#EDCAFF',
        categoryTitle: 'Люди и навыки',
        subCategories: [
            {
                subcategoryTitle: 'Управление людскими ресурсамии',
                items: [
                    {
                        text: 'Управление производительностью',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Впечатление персонала',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Организационная фасилитация',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Профессиональное развитие',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Планирование трудовых ресурсов',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Обеспечение ресурсами',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                ],
            },
            {
                subcategoryTitle: 'Управление навыками',
                items: [
                    {
                        text: 'Управление обучением и развитием',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Разработка и развитие обучения',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Проведение учебных мероприятий',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Оценка компетенций',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Работа системы сертификации',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Обучение',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                    {
                        text: 'Формирование темы',
                        value: undefined,
                        min: 1,
                        max: 7,
                        isChecked: false,
                    },
                ],
            },
        ],
    },
];
