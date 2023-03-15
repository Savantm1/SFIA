import { User, Vacancy } from '@common/models';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface VacanciesState {
    vacancies: Vacancy[];
    currentVacancy: Vacancy | null;
    fetchVacancies: (useId: User['id']) => void;
    getVacancyById: (id: Vacancy['id']) => void;
}

export const useVacanciesStore = create<VacanciesState>()(
    immer((set) => ({
        vacancies: [],
        currentVacancy: null,
        fetchVacancies: async (useId) => {
            const response = await fetch(
                `http://localhost:3001/vacancies?userId=${useId}`
            );
            const vacancies = (await response.json()) as Vacancy[];
            set({ vacancies });
        },
        getVacancyById: async (id) => {
            const response = await fetch(
                `http://localhost:3001/vacancies?id=${id}`
            );
            const vacancy = (await response.json())[0] as Vacancy;
            set({ currentVacancy: vacancy });
        },
    }))
);
