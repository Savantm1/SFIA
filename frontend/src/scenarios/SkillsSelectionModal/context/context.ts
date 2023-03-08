import { createContext } from 'react';

import { SelectedSkillType } from '../types';

type ModalSkillsContextType = {
    selectedSkills: SelectedSkillType[];
    removeSelectedSkillFromStore: (currentSkill: SelectedSkillType) => void;
    addSelectedSkillToStore: (currentSkill: SelectedSkillType) => void;
};

export const ModalSkillsContext = createContext<ModalSkillsContextType>({
    addSelectedSkillToStore(currentSkill: SelectedSkillType): void {},
    removeSelectedSkillFromStore(currentSkill: SelectedSkillType): void {},
    selectedSkills: [],
});
