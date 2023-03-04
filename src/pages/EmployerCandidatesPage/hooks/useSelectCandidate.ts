import { User } from '@common/models';
import { useCallback, useState } from 'react';

type UseSelectCandidateType = () => {
    selectedCandidate: User | null;
    selectCandidateHandler: (candidate: User | null) => () => void;
};

export const useSelectCandidate: UseSelectCandidateType = () => {
    const [selectedCandidate, setSelectedCandidate] = useState<User | null>(
        null
    );

    const selectCandidateHandler = useCallback((candidate: User | null) => {
        return () => {
            setSelectedCandidate(candidate);
        };
    }, []);

    return {
        selectedCandidate,
        selectCandidateHandler,
    };
};
