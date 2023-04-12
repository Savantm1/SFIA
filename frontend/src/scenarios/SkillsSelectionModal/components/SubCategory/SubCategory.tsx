import { HandlerPropsSkillType } from '@store/skillsModal';
import Color from '@ui/assets/color';
import { Text } from '@ui/components/Text';
import { FC, memo, useMemo } from 'react';

import { SelectSkillRow } from '../SelectSkillRow/SelectSkillRow';
import { Styled } from './styled';

export type SubCategoryProps = {
    removeSkillHandler: (props: HandlerPropsSkillType) => void;
    addSkillHandler: (props: HandlerPropsSkillType) => void;
    categoryTitle: string;
    color: string;
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
    ({
        categoryTitle,
        subcategoryTitle,
        items,
        color,
        removeSkillHandler,
        addSkillHandler,
    }) => {
        const elements = useMemo(
            () =>
                items.map((element, key) => {
                    return (
                        <SelectSkillRow
                            value={element.value}
                            key={key}
                            text={element.text}
                            min={element.min}
                            max={element.max}
                            isSelected={element.isChecked}
                            addSkillToStore={(value: number) => {
                                addSkillHandler({
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
                addSkillHandler,
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
