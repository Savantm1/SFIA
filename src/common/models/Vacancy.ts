import { SkillType } from '@common/models/SkillType';

export type Vacancy = {
    id: string;
    city: string;
    company: string;
    title: string;
    description: string;
    skillTypes: SkillType[];
    views?: number;
    responses?: number;
};
