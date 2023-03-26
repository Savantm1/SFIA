import { User, Vacancy } from '@common/models';
import ky from 'ky';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface VacanciesState {
    vacancies: Vacancy[];
    currentVacancy: Vacancy | null;
    fetchVacancies: (userId: User['id']) => void;
    getVacancyById: (id: Vacancy['id']) => void;
    createVacancy: (data: Partial<Vacancy>) => void;
    updateVacancy: (vacancyId: Vacancy['id'], data: Partial<Vacancy>) => void;
    deleteVacancy: (vacancyId: Vacancy['id']) => void;
}

export const useVacanciesStore = create<VacanciesState>()(
    immer((set) => ({
        vacancies: [],
        currentVacancy: null,
        fetchVacancies: async (userId) => {
            const response = await fetch(
                `http://localhost:3001/vacancies?userId=${userId}`
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
        createVacancy: async (data) => {
            await ky.post('http://localhost:3001/vacancies', {
                json: {
                    ...data,
                },
            });
        },
        updateVacancy: async (vacancyId, data) => {
            await ky.put(`http://localhost:3001/vacancies/${vacancyId}`, {
                json: {
                    ...data,
                },
            });
        },
        deleteVacancy: async (vacancyId) => {
            await ky.delete(`http://localhost:3001/vacancies/${vacancyId}`);
        },
    }))
);
