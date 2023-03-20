import { ModalContainer } from '@scenarios/SkillsSelectionModal/components/ModalContainer/ModalContainer';
import { FC, memo } from 'react';

type SkillsSelectionModalProps = {
    open: boolean;
    handleClose: VoidFunction;
};
export const SkillsSelectionModal: FC<SkillsSelectionModalProps> = memo(
    ({ open, handleClose }) => {
        return (
            <ModalContainer
                getDataHandler={(data) => data}
                open={open}
                handleClose={handleClose}
            />
        );
    }
);
