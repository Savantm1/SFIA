import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useGoBack = (): VoidFunction => {
    const navigate = useNavigate();

    return useCallback(() => {
        navigate(-1);
    }, [navigate]);
};
