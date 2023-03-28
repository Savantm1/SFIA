import { User, Vacancy } from '@common/models';

export type VacancyCandidatePivot = {
    id: string;
    employerId: User['id'];
    candidateId: User['id'];
    vacancyId: Vacancy['id'];
};
