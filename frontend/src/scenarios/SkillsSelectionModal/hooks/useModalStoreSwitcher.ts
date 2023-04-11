import { useSkillsModalStore } from '@store/skillsModal';
import { useSkillsModalForRolesStore } from '@store/skillsModalForRoles';

export const useModalStoreSwitcher = (forRoles: boolean) => {
    const resetAllSelections = useSkillsModalStore(
        (state) => state.resetAllSelections
    );
    const addSkillHandler = useSkillsModalStore((state) => state.addSkill);
    const removeSkillHandler = useSkillsModalStore(
        (state) => state.removeSkill
    );
    const initialModalData = useSkillsModalStore(
        (state) => state.initialModalData
    );
    const getArrayOfSelectedSkills = useSkillsModalStore(
        (state) => state.getArrayOfSelectedSkills
    );

    // forRoles

    const resetAllSelectionsForRoles = useSkillsModalForRolesStore(
        (state) => state.resetAllSelections
    );
    const removeSkillForRoles = useSkillsModalForRolesStore(
        (state) => state.removeSkill
    );
    const addSkillForRolesHandler = useSkillsModalForRolesStore(
        (state) => state.addSkill
    );
    const initialModalDataForRoles = useSkillsModalForRolesStore(
        (state) => state.initialModalData
    );
    const getArrayOfSelectedSkillsForRoles = useSkillsModalForRolesStore(
        (state) => state.getArrayOfSelectedSkills
    );
    return forRoles
        ? {
              addSkillHandler: addSkillForRolesHandler,
              resetAllSelections: resetAllSelectionsForRoles,
              removeSkillHandler: removeSkillForRoles,
              initialModalData: initialModalDataForRoles,
              getArrayOfSelectedSkills: getArrayOfSelectedSkillsForRoles,
          }
        : {
              addSkillHandler,
              resetAllSelections,
              removeSkillHandler,
              initialModalData,
              getArrayOfSelectedSkills,
          };
};
