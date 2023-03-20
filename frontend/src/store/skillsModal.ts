import {
    initialModalData,
    InitialModalDataType,
} from '@scenarios/SkillsSelectionModal/initialModalData';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

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
}

export const useSkillsModalStore = create<SkillsModalState>()(
    devtools((set) => ({
        initialModalData: initialModalData,
        addSkill: (props) => {
            const { categoryTitle, subcategoryTitle, text, value } = props;
            set((state) => {
                const category = state.initialModalData.find((categoryItem) => {
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

                item!.value = value;
                item!.isChecked = true;
                return state;
            });
        },
        removeSkill: (props) => {
            const { categoryTitle, subcategoryTitle, text } = props;
            set((state) => {
                const category = state.initialModalData.find((categoryItem) => {
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
                return state;
            });
        },
        resetAllSelections: () => {
            set((state) => {
                state.initialModalData = initialModalData;
                return state;
            });
        },
        getSelectedData: () => {
            let selectedData: InitialModalDataType = [];
            set((state) => {
                const localInitialModalData = state.initialModalData;
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
                                        subCategoryItem.items = selectedItems;
                                        return subCategoryItem;
                                    }
                                }
                            );
                        const filteredSubs = selectedSubCategories.filter(
                            (category) => {
                                return !!category;
                            }
                        );

                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        categoryItem.subCategories = filteredSubs;
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
    }))
);
