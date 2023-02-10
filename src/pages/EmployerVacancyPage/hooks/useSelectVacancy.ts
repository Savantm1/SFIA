import { Vacancy } from '@common/models';
import { useCallback, useState } from 'react';

type UseSelectVacancyType = () => {
    selectedVacancy: Vacancy | null;
    selectVacancyHandler: (vacancy: Vacancy | null) => () => void;
};

export const useSelectVacancy: UseSelectVacancyType = () => {
    const [selectedVacancy, setSelectedVacancy] = useState<Vacancy | null>(
        null
    );

    const selectVacancyHandler = useCallback((vacancy: Vacancy | null) => {
        return () => {
            setSelectedVacancy(vacancy);
        };
    }, []);

    return {
        selectedVacancy,
        selectVacancyHandler,
    };
};
