import { SkillType } from '@common/models/SkillType';

export type Vacancy = {
    id: string;
    city: string;
    company: string;
    title: string;
    salary: number;
    experience: string;
    employment: string;
    schedule: string;
    responsibilities: string;
    requirements: string;
    conditions: string;
    description: string;
    fullDescription: string;
    skillTypes: SkillType[];
    views?: number;
    responses?: number;
};
