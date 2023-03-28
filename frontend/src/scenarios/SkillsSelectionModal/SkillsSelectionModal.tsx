import { ModalContainer } from '@scenarios/SkillsSelectionModal/components/ModalContainer/ModalContainer';
import { StudentSkillType, useSkillsModalStore } from '@store/skillsModal';
import { FC, memo, useEffect } from 'react';

type SkillsSelectionModalProps = {
    open: boolean;
    handleClose: VoidFunction;
    getDataHandler: (selectedData: StudentSkillType[]) => any;
    updatedModalData?: StudentSkillType[];
};
export const SkillsSelectionModal: FC<SkillsSelectionModalProps> = memo(
    ({ open, handleClose, getDataHandler, updatedModalData }) => {
        const setInitialData = useSkillsModalStore(
            (state) => state.setInitialData
        );
        useEffect(() => {
            setInitialData(updatedModalData);
        }, [setInitialData, updatedModalData]);
        return (
            <ModalContainer
                getDataHandler={getDataHandler}
                open={open}
                handleClose={handleClose}
            />
        );
    }
);
