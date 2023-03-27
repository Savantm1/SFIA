import { User } from '@common/models';
import {
    initialModalData,
    InitialModalDataType,
} from '@scenarios/SkillsSelectionModal/initialModalData';
import ky from 'ky';
import cloneDeep from 'lodash/cloneDeep';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

type HandlerPropsSkillType = {
    categoryTitle: string;
    subcategoryTitle: string;
    text: string;
    value?: number;
};

export type StudentSkillType = {
    categoryTitle?: string;
    subcategoryTitle: string;
    color: string;
    value?: number;
    skillId: string;
    text: string;
    min?: number;
    max?: number;
};

interface SkillsModalState {
    initialModalData: InitialModalDataType;
    addSkill: (props: HandlerPropsSkillType) => void;
    removeSkill: (props: HandlerPropsSkillType) => void;
    resetAllSelections: VoidFunction;
    getArrayOfSelectedSkills: () => StudentSkillType[] | [];
    updateStudentSkillsInDB: (user: User, skills: any) => void;
    updateStudentSkillInDB: (userId: string, skill: StudentSkillType) => void;
    deleteStudentSkillFromDB: (userId: string, skillId: string) => void;
    setInitialData: (updatedModalData?: StudentSkillType[]) => void;
}

export const useSkillsModalStore = create<SkillsModalState>()(
    devtools(
        immer((set) => ({
            initialModalData: initialModalData,
            addSkill: (props) => {
                const { categoryTitle, subcategoryTitle, text, value } = props;
                set((state) => {
                    const category = state.initialModalData.find(
                        (categoryItem) => {
                            return categoryItem.categoryTitle === categoryTitle;
                        }
                    );
                    const subCategory = category?.subCategories.find(
                        (subCategoryItem) => {
                            return (
                                subCategoryItem.subcategoryTitle ===
                                subcategoryTitle
                            );
                        }
                    );

                    const item = subCategory?.items.find((item) => {
                        return item.text === text;
                    });

                    item!.value = value;
                    item!.isChecked = true;
                });
            },
            removeSkill: (props) => {
                const { categoryTitle, subcategoryTitle, text } = props;
                set((state) => {
                    const updatedModalData = state.initialModalData;
                    const category = updatedModalData.find((categoryItem) => {
                        return categoryItem.categoryTitle === categoryTitle;
                    });
                    const subCategory = category?.subCategories.find(
                        (subCategoryItem) => {
                            return (
                                subCategoryItem.subcategoryTitle ===
                                subcategoryTitle
                            );
                        }
                    );

                    const item = subCategory?.items.find((item) => {
                        return item.text === text;
                    });

                    item!.value = undefined;
                    item!.isChecked = false;
                    state.initialModalData = updatedModalData;
                });
            },
            resetAllSelections: () => {
                set((state) => {
                    return {
                        ...state,
                        initialModalData: initialModalData,
                    };
                });
            },

            getArrayOfSelectedSkills: () => {
                const arrayOfSelectedSkills: StudentSkillType[] = [];
                set((state) => {
                    const localInitialModalData: InitialModalDataType =
                        cloneDeep(state.initialModalData);
                    localInitialModalData.forEach((categoryItem) => {
                        categoryItem.subCategories.forEach((subItem) => {
                            subItem.items.forEach((skillItem) => {
                                if (skillItem.isChecked) {
                                    const shortSkillItem = {
                                        categoryTitle:
                                            categoryItem.categoryTitle,
                                        subcategoryTitle:
                                            subItem.subcategoryTitle,
                                        color: categoryItem.mainColor,
                                        skillId: skillItem.skillId,
                                        text: skillItem.text,
                                        value: skillItem!.value,
                                        min: skillItem.min,
                                        max: skillItem.max,
                                    };
                                    arrayOfSelectedSkills.push(shortSkillItem);
                                }
                            });
                        });
                    });
                    return state;
                });
                return arrayOfSelectedSkills;
            },

            updateStudentSkillsInDB: async (user, skills): Promise<void> => {
                await ky.put(`http://localhost:3001/users/${user.id}`, {
                    json: {
                        id: user.id,
                        role: user.role,
                        fullName: user.fullName,
                        phone: user.phone,
                        mail: user.mail,
                        city: user.city,
                        skills: skills,
                    },
                });
            },

            updateStudentSkillInDB: async (userId, skill) => {
                await ky.put(
                    `http://localhost:3001/users/${userId}/skills/${skill.skillId}`,
                    {
                        json: {
                            ...skill,
                        },
                    }
                );
            },

            deleteStudentSkillFromDB: async (userId, skillId) => {
                await ky.delete(
                    `http://localhost:3001/users/${userId}/skills/${skillId}`
                );
            },
            setInitialData: (updatedModalData) => {
                if (!updatedModalData?.length) return;

                set((state) => {
                    updatedModalData.forEach((defaultElement) => {
                        state.initialModalData.forEach((categoryItem) => {
                            categoryItem.subCategories.forEach(
                                (subcategoryItem) => {
                                    subcategoryItem.items.forEach((item) => {
                                        if (
                                            item.skillId ===
                                            defaultElement.skillId
                                        ) {
                                            item.isChecked = true;
                                            item.value = defaultElement.value;
                                        }
                                        return item;
                                    });
                                }
                            );
                        });
                    });
                    return state;
                });
            },
        }))
    )
);
