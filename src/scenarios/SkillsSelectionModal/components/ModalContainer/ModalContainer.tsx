import { faker } from '@faker-js/faker';
import { ColorCouples } from '@scenarios/SkillsSelectionModal/ColorCouples';
import { Category } from '@scenarios/SkillsSelectionModal/components/Category/Category';
import { PAGE_DATA_MOCK } from '@scenarios/SkillsSelectionModal/mock';
import { Styled } from '@scenarios/SkillsSelectionModal/styled';
import Color from '@ui/assets/color';
import { Icons } from '@ui/assets/icons';
import { Modal } from '@ui/components/Modal';
import { Text } from '@ui/components/Text';
import { FC, memo } from 'react';
import * as React from 'react';

type ModalContainerProps = {
    open: boolean;
    handleClose: VoidFunction;
};
export const ModalContainer: FC<ModalContainerProps> = memo(
    ({ open, handleClose }) => {
        const categories = PAGE_DATA_MOCK.map((el, key) => {
            return (
                <Category
                    key={faker.datatype.uuid()}
                    title={el.title}
                    subCategories={el.subCategories}
                    color={ColorCouples[key]}
                />
            );
        });

        const categoriesDeleteButtons = PAGE_DATA_MOCK.map((el) => {
            return (
                <Styled.DeleteCategoryBtn key={faker.datatype.uuid()}>
                    <Styled.Close
                        iconName={Icons.close}
                        size={15}
                        onClick={() => {}}
                    />
                    <Text variant={'h6'} color={Color.secondaryGray}>
                        {el.title}
                    </Text>
                </Styled.DeleteCategoryBtn>
            );
        });

        return (
            <Modal onClose={handleClose} isOpen={open}>
                <Styled.Container>
                    <Styled.DeleteBar>
                        {categoriesDeleteButtons}
                    </Styled.DeleteBar>
                    <Styled.ContentOverflow>
                        <Styled.ScrollContainer>
                            {categories}
                        </Styled.ScrollContainer>
                    </Styled.ContentOverflow>

                    <Styled.Footer>
                        <Styled.NextButton onClick={() => {}} value={'Далее'} />
                    </Styled.Footer>
                </Styled.Container>
            </Modal>
        );
    }
);
