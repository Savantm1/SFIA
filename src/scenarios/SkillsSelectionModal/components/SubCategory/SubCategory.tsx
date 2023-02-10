import { faker } from '@faker-js/faker';
import Color, { KeysOfColor } from '@ui/assets/color';
import { Text } from '@ui/components/Text';
import { FC, memo } from 'react';

import { SelectSkillRow } from '../SelectSkillRow/SelectSkillRow';
import { Styled } from './styled';

export type SubCategoryProps = {
    color: (typeof Color)[KeysOfColor];
    title: string;
    items: { value: string; min: number; max: number; isChecked: boolean }[];
};
export const SubCategory: FC<SubCategoryProps> = memo(
    ({ title, items, color }) => {
        const elements = items.map((element) => {
            return (
                <SelectSkillRow
                    key={faker.datatype.uuid()}
                    text={element.value}
                    min={element.min}
                    max={element.max}
                    isSelected={false}
                    setIsSelected={() => {}}
                    color={color}
                />
            );
        });
        return (
            <Styled.Container>
                <Styled.SubtitleRow>
                    <Styled.LeftSideRow>
                        <Text
                            variant={'h5'}
                            align={'left'}
                            color={Color.mainBlack}
                        >
                            {title}
                        </Text>
                    </Styled.LeftSideRow>
                    <Styled.RightSideRow>
                        <Styled.Value>1</Styled.Value>
                        <Styled.Value>2</Styled.Value>
                        <Styled.Value>3</Styled.Value>
                        <Styled.Value>4</Styled.Value>
                        <Styled.Value>5</Styled.Value>
                        <Styled.Value>6</Styled.Value>
                        <Styled.Value>7</Styled.Value>
                    </Styled.RightSideRow>
                </Styled.SubtitleRow>
                {elements}
            </Styled.Container>
        );
    }
);
