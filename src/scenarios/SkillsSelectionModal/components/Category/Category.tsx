import { faker } from '@faker-js/faker';
import Color, { KeysOfColor } from '@ui/assets/color';
import { Text } from '@ui/components/Text';
import { FC, memo } from 'react';

import { SubCategory } from '../SubCategory/SubCategory';
import { Styled } from './styled';

export type CategoryProps = {
    title: string;
    color: {
        main: (typeof Color)[KeysOfColor];
        secondary: (typeof Color)[KeysOfColor];
    };
    subCategories: {
        title: string;
        items: {
            value: string;
            min: number;
            max: number;
            isChecked: boolean;
        }[];
    }[];
};

export const Category: FC<CategoryProps> = memo(
    ({ title, subCategories, color }) => {
        const subCategoriesItems = subCategories.map((subCategory) => {
            return (
                <SubCategory
                    key={faker.datatype.uuid()}
                    title={subCategory.title}
                    items={subCategory.items}
                    color={color.main}
                />
            );
        });
        return (
            <Styled.Container>
                <Styled.Header color={color.main}>
                    <Text variant={'h5'} align={'left'} color={Color.mainWhite}>
                        {title}
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
