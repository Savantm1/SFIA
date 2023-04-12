import { useCallback, useState } from 'react';

export const useModals = () => {
    const [skillsSelectionModalIsVisible, setSkillsSelectionModalIsVisible] =
        useState(false);
    const [isVisibleRolesSelectionModal, setIsVisibleRolesSelectionModal] =
        useState(false);
    const [saveRoleModalIsVisible, setSaveRoleModalIsVisible] = useState(false);

    const onOpenSkillsSelectionModal = useCallback(() => {
        setSkillsSelectionModalIsVisible(true);
    }, []);
    const onCloseSkillsSelectionModal = useCallback(() => {
        setSkillsSelectionModalIsVisible(false);
    }, []);

    const onOpenRolesSelectionModal: VoidFunction = useCallback(() => {
        setIsVisibleRolesSelectionModal(true);
    }, []);
    const onCloseRolesSelectionModal: VoidFunction = useCallback(() => {
        setIsVisibleRolesSelectionModal(false);
    }, []);

    const onCloseSaveRolesModal = useCallback(() => {
        setSaveRoleModalIsVisible(false);
    }, []);
    const onOpenSaveRolesModal = useCallback(() => {
        setSaveRoleModalIsVisible(true);
    }, []);

    return {
        skillsSelectionModalIsVisible,
        isVisibleRolesSelectionModal,
        saveRoleModalIsVisible,
        onOpenSkillsSelectionModal,
        onCloseSkillsSelectionModal,
        onOpenRolesSelectionModal,
        onCloseRolesSelectionModal,
        onOpenSaveRolesModal,
        onCloseSaveRolesModal,
    };
};
