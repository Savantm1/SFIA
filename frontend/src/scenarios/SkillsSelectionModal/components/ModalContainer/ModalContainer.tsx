import { faker } from '@faker-js/faker';
import { ColorCouples } from '@scenarios/SkillsSelectionModal/ColorCouples';
import { Category } from '@scenarios/SkillsSelectionModal/components/Category/Category';
import { InitialModalDataType } from '@scenarios/SkillsSelectionModal/initialModalData';
import { Styled } from '@scenarios/SkillsSelectionModal/styled';
import { useSkillsModalStore } from '@store/skillsModal';
import { Modal } from '@ui/components/Modal';
import { FC, memo } from 'react';

type ModalContainerProps = {
    open: boolean;
    handleClose: VoidFunction;
    getDataHandler: (
        selectedData: InitialModalDataType
    ) => InitialModalDataType;
};
export const ModalContainer: FC<ModalContainerProps> = memo(
    ({ open, handleClose, getDataHandler }) => {
        const { resetAllSelections, getSelectedData, initialModalData } =
            useSkillsModalStore((state) => state);
        console.log('initialModalData', initialModalData);
        const categories = initialModalData.map((category, key) => {
            return (
                <Category
                    key={faker.datatype.uuid()}
                    categoryTitle={category.categoryTitle}
                    subCategories={category.subCategories}
                    color={ColorCouples[key]}
                />
            );
        });

        // const DeleteSelectedSkillButtons = context.selectedSkills.map(
        //     (el: SelectedSkillType) => {
        //         return (
        //             <Styled.DeleteSelectedSkillBtn key={faker.datatype.uuid()}>
        //                 <Styled.Close
        //                     iconName={Icons.close}
        //                     size={15}
        //                     onClick={() => {}}
        //                 />
        //                 <Text variant={'h6'} color={Color.secondaryGray}>
        //                     {el.skillText}
        //                 </Text>
        //             </Styled.DeleteSelectedSkillBtn>
        //         );
        //     }
        // );

        return (
            <Modal
                onClose={() => {
                    handleClose();
                    resetAllSelections();
                }}
                isOpen={open}
            >
                <Styled.Container>
                    <Styled.DeleteBar>
                        {/*{DeleteSelectedSkillButtons}*/}
                    </Styled.DeleteBar>
                    <Styled.ContentOverflow>
                        <Styled.ScrollContainer>
                            {categories}
                        </Styled.ScrollContainer>
                    </Styled.ContentOverflow>

                    <Styled.Footer>
                        <Styled.NextButton
                            onClick={() => {
                                const selectedData = getSelectedData();
                                getDataHandler(selectedData);
                                console.log('getSelectedData', selectedData);
                                resetAllSelections();
                                handleClose();
                            }}
                            value={'Далее'}
                        />
                    </Styled.Footer>
                </Styled.Container>
            </Modal>
        );
    }
);
