import { faker } from '@faker-js/faker';
import Color, { KeysOfColor } from '@ui/assets/color';
import { Text } from '@ui/components/Text';
import { FC, memo } from 'react';

import { SubCategory } from '../SubCategory/SubCategory';
import { Styled } from './styled';

export type CategoryProps = {
    categoryTitle: string;
    color: {
        main: (typeof Color)[KeysOfColor];
        secondary: (typeof Color)[KeysOfColor];
    };
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
    ({ categoryTitle, subCategories, color }) => {
        const subCategoriesItems = subCategories.map((subCategory) => {
            return (
                <SubCategory
                    categoryTitle={categoryTitle}
                    key={faker.datatype.uuid()}
                    subcategoryTitle={subCategory.subcategoryTitle}
                    items={subCategory.items}
                    color={color.main}
                />
            );
        });
        return (
            <Styled.Container>
                <Styled.Header color={color.main}>
                    <Text variant={'h5'} align={'left'} color={Color.mainWhite}>
                        {categoryTitle}
                    </Text>
                </Styled.Header>
                <Styled.SubCategoryContainer color={color.secondary}>
                    <Text variant={'h6'}></Text>
                    {subCategoriesItems}
                </Styled.SubCategoryContainer>
            </Styled.Container>
        );
    }
);
