import { HandlerPropsSkillType } from '@store/skillsModal';
import Color from '@ui/assets/color';
import { Text } from '@ui/components/Text';
import { FC, memo, useMemo } from 'react';

import { SubCategory } from '../SubCategory/SubCategory';
import { Styled } from './styled';

export type CategoryProps = {
    addSkillHandler: (props: HandlerPropsSkillType) => void;
    removeSkillHandler: (props: HandlerPropsSkillType) => void;
    categoryTitle: string;
    mainColor: string;
    secondaryColor: string;
    subCategories: {
        subcategoryTitle: string;
        items: {
            value?: number;
            text: string;
            min: number;
            max: number;
            isChecked: boolean;
        }[];
    }[];
};

export const Category: FC<CategoryProps> = memo(
    ({
        categoryTitle,
        subCategories,
        mainColor,
        secondaryColor,
        addSkillHandler,
        removeSkillHandler,
    }) => {
        const subCategoriesItems = useMemo(
            () =>
                subCategories.map((subCategory, key) => {
                    return (
                        <SubCategory
                            addSkillHandler={addSkillHandler}
                            removeSkillHandler={removeSkillHandler}
                            categoryTitle={categoryTitle}
                            key={key}
                            subcategoryTitle={subCategory.subcategoryTitle}
                            items={subCategory.items}
                            color={mainColor}
                        />
                    );
                }),
            [
                addSkillHandler,
                categoryTitle,
                mainColor,
                removeSkillHandler,
                subCategories,
            ]
        );
        return (
            <Styled.Container>
                <Styled.Header color={mainColor}>
                    <Text variant={'h5'} align={'left'} color={Color.mainWhite}>
                        {categoryTitle}
                    </Text>
                </Styled.Header>
                <Styled.SubCategoryContainer color={secondaryColor}>
                    {subCategoriesItems}
                </Styled.SubCategoryContainer>
            </Styled.Container>
        );
    }
);
