import { StudentSkillType } from '@store/skillsModal';

export type Vacancy = {
    id: string;
    userId: string;
    title: string;
    salary: number;
    experience: string;
    employment: string;
    schedule: string;
    responsibilities: string;
    requirements: string;
    conditions: string;
    description: string;
    skillTypes: StudentSkillType[];
    views?: number;
    responses?: number;
};
