import {
    initialModalData,
    InitialModalDataType,
    ItemSkillType,
} from '@scenarios/SkillsSelectionModal/initialModalData';
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

interface SkillsModalState {
    initialModalData: InitialModalDataType;
    addSkill: (props: HandlerPropsSkillType) => void;
    removeSkill: (props: HandlerPropsSkillType) => void;
    resetAllSelections: VoidFunction;
    getSelectedData: () => InitialModalDataType;
    getArrayOfSelectedSkills: () => ItemSkillType[] | [];
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
                    console.log('updatedModalData', updatedModalData);
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
            getSelectedData: () => {
                let selectedData: InitialModalDataType = [];
                set((state) => {
                    const localInitialModalData: InitialModalDataType =
                        cloneDeep(state.initialModalData);
                    const selectedCategories = localInitialModalData.map(
                        (categoryItem) => {
                            const selectedSubCategories =
                                categoryItem.subCategories.map(
                                    (subCategoryItem) => {
                                        const selectedItems =
                                            subCategoryItem.items.filter(
                                                (item) => item.isChecked
                                            );
                                        if (selectedItems.length) {
                                            subCategoryItem.items =
                                                selectedItems;
                                            return subCategoryItem;
                                        }
                                    }
                                );
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            categoryItem.subCategories =
                                selectedSubCategories.filter((category) => {
                                    return !!category;
                                });
                            return categoryItem;
                        }
                    );

                    selectedData = selectedCategories.filter(
                        (category) => !!category.subCategories.length
                    );
                    return state;
                });

                return selectedData;
            },

            getArrayOfSelectedSkills: () => {
                const arrayOfSelectedSkills: ItemSkillType[] = [];
                set((state) => {
                    const localInitialModalData: InitialModalDataType =
                        cloneDeep(state.initialModalData);
                    localInitialModalData.forEach((categoryItem) => {
                        categoryItem.subCategories.forEach((subItem) => {
                            subItem.items.forEach((skillItem) => {
                                if (skillItem.isChecked) {
                                    skillItem.categoryTitle =
                                        categoryItem.categoryTitle;
                                    skillItem.subcategoryTitle =
                                        subItem.subcategoryTitle;
                                    arrayOfSelectedSkills.push(skillItem);
                                }
                            });
                        });
                    });
                    return state;
                });
                return arrayOfSelectedSkills;
            },
        }))
    )
);
