import { useCallback, useState } from 'react';

type UseModalType = () => {
    isModalOpen: boolean;
    openModalHandler: VoidFunction;
    closeModalHandler: VoidFunction;
};

export const useModal: UseModalType = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModalHandler = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const closeModalHandler = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    return { isModalOpen, openModalHandler, closeModalHandler };
};
