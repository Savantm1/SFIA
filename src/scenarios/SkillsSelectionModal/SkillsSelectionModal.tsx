import { ModalContainer } from '@scenarios/SkillsSelectionModal/components/ModalContainer/ModalContainer';
import { SelectedSkillType } from '@scenarios/SkillsSelectionModal/types';
import { FC, memo, useCallback, useContext } from 'react';
import * as React from 'react';

import { ModalSkillsContext } from './context/context';

type SkillsSelectionModalProps = {
    open: boolean;
    handleClose: VoidFunction;
};
export const SkillsSelectionModal: FC<SkillsSelectionModalProps> = memo(
    ({ open, handleClose }) => {
        const context = useContext(ModalSkillsContext);
        const addSelectedSkillToStore = useCallback(
            (skill: SelectedSkillType) => {
                context.selectedSkills.push(skill);
            },
            [context.selectedSkills]
        );

        const removeSelectedSkillFromStore = useCallback(
            (currentSkill: SelectedSkillType) => {
                context.selectedSkills.filter((skill: SelectedSkillType) => {
                    return currentSkill.skillText !== skill.skillText;
                });
            },
            [context.selectedSkills]
        );
        return (
            <ModalSkillsContext.Provider
                value={{
                    selectedSkills: [],
                    removeSelectedSkillFromStore,
                    addSelectedSkillToStore,
                }}
            >
                <ModalContainer open={open} handleClose={handleClose} />
            </ModalSkillsContext.Provider>
        );
    }
);
