import {
    User,
    Vacancy,
    VacancyCandidatePivot,
    VacancyWithCandidates,
} from '@common/models';
import { create } from 'zustand';

interface VacancyCandidatePivotStoreState {
    vacanciesWithCandidates: VacancyWithCandidates[];
    fetchVacanciesWithCandidates: (employerId: User['id']) => void;
}

export const useVacancyCandidatePivotStore =
    create<VacancyCandidatePivotStoreState>()((set) => ({
        vacanciesWithCandidates: [],
        fetchVacanciesWithCandidates: async (employerId) => {
            const response = await fetch(
                `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/vacancyCandidatePivot?employerId=${employerId}`
            );
            const vacancyCandidatePivot =
                (await response.json()) as VacancyCandidatePivot[];

            const usersResponse = await fetch(
                `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/users`
            );
            const users = (await usersResponse.json()) as User[];

            const vacanciesResponse = await fetch(
                `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/vacancies`
            );
            const vacancies = (await vacanciesResponse.json()) as Vacancy[];

            const vacanciesWithCandidates: VacancyWithCandidates[] = [];
            const vacanciesWithCandidatesMap = new Map<Vacancy, User[]>();

            vacancyCandidatePivot.forEach((pivot) => {
                const vacancy = vacancies.find((vacancy) => {
                    return vacancy.id === pivot.vacancyId;
                });

                const candidate = users.find((user) => {
                    return user.id === pivot.candidateId;
                });

                if (!vacancy || !candidate) {
                    return;
                }

                const issetCandidates =
                    vacanciesWithCandidatesMap.get(vacancy) ?? [];
                vacanciesWithCandidatesMap.set(vacancy, [
                    ...issetCandidates,
                    candidate,
                ]);

                vacanciesWithCandidatesMap.forEach((candidates, vacancy) => {
                    vacanciesWithCandidates.push({ vacancy, candidates });
                });
            });

            set({ vacanciesWithCandidates });
        },
    }));
