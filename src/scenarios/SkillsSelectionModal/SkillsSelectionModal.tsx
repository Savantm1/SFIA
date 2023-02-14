import { ModalContainer } from '@scenarios/SkillsSelectionModal/components/ModalContainer/ModalContainer';
import { FC, memo } from 'react';
import * as React from 'react';
type SkillsSelectionModalProps = {
    open: boolean;
    handleClose: VoidFunction;
};
export const SkillsSelectionModal: FC<SkillsSelectionModalProps> = memo(
    ({ open, handleClose }) => {
        return <ModalContainer open={open} handleClose={handleClose} />;
    }
);
