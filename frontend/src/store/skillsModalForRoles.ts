import { User } from '@common/models';
import {
    initialModalData,
    InitialModalDataType,
} from '@scenarios/SkillsSelectionModal/initialModalData';
import { useAuthStore } from '@store/auth';
import ky from 'ky';
import cloneDeep from 'lodash/cloneDeep';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { HandlerPropsSkillType, StudentSkillType } from './skillsModal';

interface SkillsModalForRolesState {
    initialModalData: InitialModalDataType;
    addSkill: (props: HandlerPropsSkillType) => void;
    removeSkill: (props: HandlerPropsSkillType) => void;
    resetAllSelections: VoidFunction;
    getArrayOfSelectedSkills: () => StudentSkillType[] | [];
    updateStudentSkillsInDB: (user: User, skills: StudentSkillType[]) => void;
    setInitialData: (updatedModalData?: StudentSkillType[]) => void;
}

export const useSkillsModalForRolesStore = create<SkillsModalForRolesState>()(
    devtools(
        immer((set, get) => ({
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
                                        subColor: categoryItem.secondaryColor,
                                        id: skillItem.id,
                                        code: skillItem.code,
                                        text: skillItem.text,
                                        value: Number(skillItem?.value),
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
                await ky.put(
                    `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/users/${user.id}`,
                    {
                        json: {
                            id: user.id,
                            role: user.role,
                            fullName: user.fullName,
                            phone: user.phone,
                            mail: user.mail,
                            city: user.city,
                            skills: skills,
                        },
                    }
                );
                useAuthStore.getState().setCurrentUser({ ...user, skills });
            },

            setInitialData: (updatedModalData) => {
                if (!updatedModalData?.length) {
                    set({ initialModalData: initialModalData });
                    return;
                }

                set((state) => {
                    updatedModalData.forEach((defaultElement) => {
                        state.initialModalData.forEach((categoryItem) => {
                            categoryItem.subCategories.forEach(
                                (subcategoryItem) => {
                                    subcategoryItem.items.forEach((item) => {
                                        if (item.id === defaultElement.id) {
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
