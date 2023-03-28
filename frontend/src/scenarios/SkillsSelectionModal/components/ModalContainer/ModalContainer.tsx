import { Category } from '@scenarios/SkillsSelectionModal/components/Category/Category';
import { Styled } from '@scenarios/SkillsSelectionModal/styled';
import { StudentSkillType, useSkillsModalStore } from '@store/skillsModal';
import Color from '@ui/assets/color';
import { Icons } from '@ui/assets/icons';
import { Modal } from '@ui/components/Modal';
import { Text } from '@ui/components/Text';
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react';
type ModalContainerProps = {
    open: boolean;
    handleClose: VoidFunction;
    needToReset?: boolean;
    getDataHandler: (selectedData: StudentSkillType[]) => Promise<void>;
};
export const ModalContainer: FC<ModalContainerProps> = memo(
    ({ open, handleClose, getDataHandler, needToReset = false }) => {
        const resetAllSelections = useSkillsModalStore(
            (state) => state.resetAllSelections
        );
        const removeSkill = useSkillsModalStore((state) => state.removeSkill);
        const initialModalData = useSkillsModalStore(
            (state) => state.initialModalData
        );
        const getArrayOfSelectedSkills = useSkillsModalStore(
            (state) => state.getArrayOfSelectedSkills
        );

        const [selectedSkillsArray, setSelectedSkillsArray] = useState(
            getArrayOfSelectedSkills()
        );

        useEffect(() => {
            setSelectedSkillsArray(getArrayOfSelectedSkills());
        }, [getArrayOfSelectedSkills, initialModalData]);

        const categories = useMemo(
            () =>
                initialModalData.map((category, key) => {
                    return (
                        <Category
                            key={key}
                            categoryTitle={category.categoryTitle}
                            subCategories={category.subCategories}
                            mainColor={category.mainColor}
                            secondaryColor={category.secondaryColor}
                        />
                    );
                }),
            [initialModalData]
        );

        const removeSkillHandler = useCallback(
            (skill: StudentSkillType) => {
                removeSkill({
                    categoryTitle: skill.categoryTitle!,
                    subcategoryTitle: skill.subcategoryTitle!,
                    text: skill.text,
                });
            },
            [removeSkill]
        );

        const nextButtonHandler = useCallback(async () => {
            const skillsArray: StudentSkillType[] = getArrayOfSelectedSkills();
            await getDataHandler(skillsArray);
            if (needToReset) {
                resetAllSelections();
            }
            handleClose();
        }, [
            getArrayOfSelectedSkills,
            getDataHandler,
            handleClose,
            needToReset,
            resetAllSelections,
        ]);
        const DeleteSelectedSkillButtons = useMemo(() => {
            return selectedSkillsArray.map((skill, index) => {
                return (
                    <Styled.DeleteSelectedSkillBtn key={index}>
                        <Text variant={'h6'} color={Color.secondaryGray}>
                            {skill.text}
                        </Text>
                        <Styled.Close
                            iconName={Icons.close}
                            size={15}
                            onClick={() => {
                                removeSkillHandler(skill);
                            }}
                        />
                    </Styled.DeleteSelectedSkillBtn>
                );
            });
        }, [removeSkillHandler, selectedSkillsArray]);

        return (
            <Modal
                onClose={() => {
                    handleClose();
                    // resetAllSelections();
                }}
                isOpen={open}
            >
                <Styled.Container>
                    <Styled.DeleteBar>
                        {DeleteSelectedSkillButtons}
                    </Styled.DeleteBar>
                    <Styled.ContentOverflow>
                        <Styled.ScrollContainer>
                            {categories}
                        </Styled.ScrollContainer>
                    </Styled.ContentOverflow>

                    <Styled.Footer>
                        <Styled.NextButton
                            disabled={!selectedSkillsArray.length}
                            onClick={nextButtonHandler}
                            value={'Далее'}
                        />
                    </Styled.Footer>
                </Styled.Container>
            </Modal>
        );
    }
);
