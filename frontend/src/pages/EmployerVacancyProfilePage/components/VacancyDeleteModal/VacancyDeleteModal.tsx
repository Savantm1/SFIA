import { Modal } from '@ui/components/Modal';
import React, { FC, memo } from 'react';

import { Styled } from './styled';

type VacancyDeleteModalProps = {
    isOpen: boolean;
    deleteVacancyHandler: VoidFunction;
    closeModalHandler: VoidFunction;
};

export const VacancyDeleteModal: FC<VacancyDeleteModalProps> = memo(
    ({ isOpen, deleteVacancyHandler, closeModalHandler }) => {
        return (
            <Modal isOpen={isOpen} onClose={() => {}} needCloseButton={false}>
                <Styled.Wrapper>
                    <Styled.Title>
                        Вы действительно хотите удалить вакансию?
                    </Styled.Title>
                    <Styled.Subtitle>
                        После удаления вакансии действие нельзя отменить
                    </Styled.Subtitle>

                    <Styled.ButtonsWrapper>
                        <Styled.DeleteButton
                            onClick={deleteVacancyHandler}
                            value={'Удалить'}
                        />
                        <Styled.CancelButton
                            onClick={closeModalHandler}
                            value={'Отмена'}
                        />
                    </Styled.ButtonsWrapper>
                </Styled.Wrapper>
            </Modal>
        );
    }
);
