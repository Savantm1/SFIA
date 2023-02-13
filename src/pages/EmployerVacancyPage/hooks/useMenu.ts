import React, { useCallback, useState } from 'react';

type UseMenuType = () => {
    anchorEl: null | HTMLElement;
    isMenuOpen: boolean;
    anchorClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
    closeMenuHandler: VoidFunction;
};

export const useMenu: UseMenuType = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);

    const anchorClickHandler = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        },
        []
    );

    const closeMenuHandler = useCallback(() => {
        setAnchorEl(null);
    }, []);

    return {
        anchorEl,
        isMenuOpen,
        anchorClickHandler,
        closeMenuHandler,
    };
};
