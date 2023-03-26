import { Modal } from '@ui/components/Modal';
import { FC, memo } from 'react';

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
                        <Styled.DeleteButton onClick={deleteVacancyHandler}>
                            Удалить
                        </Styled.DeleteButton>
                        <Styled.CancelButton onClick={closeModalHandler}>
                            Отмена
                        </Styled.CancelButton>
                    </Styled.ButtonsWrapper>
                </Styled.Wrapper>
            </Modal>
        );
    }
);
