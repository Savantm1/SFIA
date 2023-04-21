import { Modal } from '@ui/components/Modal';
import { FC, memo } from 'react';

import { Styled } from './styled';

type MemberDeleteModalProps = {
    isOpen: boolean;
    deleteMemberHandler: VoidFunction;
    closeModalHandler: VoidFunction;
};

export const MemberDeleteModal: FC<MemberDeleteModalProps> = memo(
    ({ isOpen, deleteMemberHandler, closeModalHandler }) => {
        return (
            <Modal isOpen={isOpen} onClose={() => {}} needCloseButton={false}>
                <Styled.Wrapper>
                    <Styled.Title>
                        Вы действительно хотите удалить сотрудника?
                    </Styled.Title>
                    <Styled.Subtitle>
                        После удаления сотрудника действие нельзя отменить
                    </Styled.Subtitle>

                    <Styled.ButtonsWrapper>
                        <Styled.DeleteButton onClick={deleteMemberHandler}>
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
