import { useSkillsModalStore } from '@store/skillsModal';
import Color, { KeysOfColor } from '@ui/assets/color';
import { Text } from '@ui/components/Text';
import { FC, memo, useMemo } from 'react';

import { SelectSkillRow } from '../SelectSkillRow/SelectSkillRow';
import { Styled } from './styled';

export type SubCategoryProps = {
    categoryTitle: string;
    color: (typeof Color)[KeysOfColor];
    subcategoryTitle: string;
    items: {
        text: string;
        value?: number;
        min: number;
        max: number;
        isChecked: boolean;
    }[];
};
export const SubCategory: FC<SubCategoryProps> = memo(
    ({ categoryTitle, subcategoryTitle, items, color }) => {
        const addSkillsHandler = useSkillsModalStore((state) => state.addSkill);
        const removeSkillHandler = useSkillsModalStore(
            (state) => state.removeSkill
        );

        const elements = useMemo(
            () =>
                items.map((element, key) => {
                    return (
                        <SelectSkillRow
                            key={key}
                            text={element.text}
                            min={element.min}
                            max={element.max}
                            isSelected={element.isChecked}
                            addSkillToStore={(value: number) => {
                                addSkillsHandler({
                                    categoryTitle,
                                    subcategoryTitle,
                                    text: element.text,
                                    value,
                                });
                            }}
                            removeSkillFromStore={() => {
                                removeSkillHandler({
                                    categoryTitle,
                                    subcategoryTitle,
                                    text: element.text,
                                });
                            }}
                            color={color}
                        />
                    );
                }),
            [
                addSkillsHandler,
                categoryTitle,
                color,
                items,
                removeSkillHandler,
                subcategoryTitle,
            ]
        );
        return (
            <Styled.Container>
                <Styled.SubtitleRow>
                    <Styled.LeftSideRow>
                        <Text
                            variant={'h5'}
                            align={'left'}
                            color={Color.mainBlack}
                        >
                            {subcategoryTitle}
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
