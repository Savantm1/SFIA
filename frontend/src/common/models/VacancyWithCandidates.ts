import { User, Vacancy } from '@common/models';

export type VacancyWithCandidates = {
    vacancy: Vacancy;
    candidates: User[];
};
