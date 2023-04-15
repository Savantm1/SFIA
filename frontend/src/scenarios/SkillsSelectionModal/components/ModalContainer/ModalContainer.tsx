import { Category } from '@scenarios/SkillsSelectionModal/components/Category/Category';
import { useModalStoreSwitcher } from '@scenarios/SkillsSelectionModal/hooks/useModalStoreSwitcher';
import { Styled } from '@scenarios/SkillsSelectionModal/styled';
import { StudentSkillType } from '@store/skillsModal';
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
    forRoles?: boolean;
};
export const ModalContainer: FC<ModalContainerProps> = memo(
    ({
        open,
        handleClose,
        getDataHandler,
        needToReset = false,
        forRoles = false,
    }) => {
        const {
            addSkillHandler,
            removeSkillHandler: onRemoveSkill,
            resetAllSelections,
            initialModalData,
            getArrayOfSelectedSkills,
        } = useModalStoreSwitcher(forRoles);

        const [selectedSkillsArray, setSelectedSkillsArray] = useState(
            getArrayOfSelectedSkills()
        );

        useEffect(() => {
            setSelectedSkillsArray(getArrayOfSelectedSkills());
        }, [getArrayOfSelectedSkills, initialModalData, resetAllSelections]);

        const removeSkillHandler = useCallback(
            (skill: StudentSkillType) => {
                onRemoveSkill({
                    categoryTitle: skill.categoryTitle!,
                    subcategoryTitle: skill.subcategoryTitle!,
                    text: skill.text ?? '',
                });
            },
            [onRemoveSkill]
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

        const deleteSelectedSkillButtons = useMemo(() => {
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

        const categories = useMemo(
            () =>
                initialModalData.map((category, key) => {
                    return (
                        <Category
                            addSkillHandler={addSkillHandler}
                            removeSkillHandler={onRemoveSkill}
                            key={key}
                            categoryTitle={category.categoryTitle}
                            subCategories={category.subCategories}
                            mainColor={category.mainColor}
                            secondaryColor={category.secondaryColor}
                        />
                    );
                }),
            [addSkillHandler, initialModalData, onRemoveSkill]
        );

        return (
            <Modal onClose={handleClose} isOpen={open}>
                <Styled.Container>
                    <Styled.DeleteBar>
                        {deleteSelectedSkillButtons}
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
