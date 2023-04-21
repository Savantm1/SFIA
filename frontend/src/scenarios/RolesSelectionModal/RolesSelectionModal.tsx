import { useCurrentUser } from '@common/hooks/useCurrentUser';
import { StudentRoleType, useRolesModalStore } from '@store/rolesModal';
import Color from '@ui/assets/color';
import { Icons } from '@ui/assets/icons';
import img from '@ui/assets/images/undraw_percentages_re_a1ao 1.png';
import { IconButton } from '@ui/components/IconButton/IconButton';
import { Modal } from '@ui/components/Modal';
import { Text } from '@ui/components/Text';
import { FC, memo, useEffect, useState } from 'react';

import { Styled } from './styled';

type RolesSelectionModalProps = {
    open: boolean;
    handleClose: VoidFunction;
    // getNewRole: (newRole: StudentRoleType) => void;
    onOpenSkillsModal: VoidFunction;
};
export const RolesSelectionModal: FC<RolesSelectionModalProps> = memo(
    ({ open, handleClose, onOpenSkillsModal }) => {
        const [selectRoleValue, setSelectRoleValue] = useState('');
        const defaultRoles = useRolesModalStore((state) => state.studentRoles);
        const getRoles = useRolesModalStore((state) => state.getRoles);
        const addRole = useRolesModalStore((state) => state.addRole);
        const user = useCurrentUser();
        const userRoles = user?.studentRoles;

        const filteredRoles = defaultRoles.filter((item) => {
            if (!userRoles?.length) return true;
            let result = true;
            for (const userRole of userRoles) {
                if (userRole.id === item.id) {
                    result = false;
                }
            }
            return result;
        });
        useEffect(() => {
            getRoles();
        }, [open, getRoles]);

        return (
            <Modal onClose={handleClose} isOpen={open}>
                <Styled.Container>
                    <Styled.LeftSide>
                        <Text align={'left'} variant={'h2'}>
                            Мои Роли
                        </Text>
                        <Styled.Description
                            align={'left'}
                            variant={'h6'}
                            color={Color.secondaryGray}
                        >
                            Выберете роль из предложенных или создайте свою
                        </Styled.Description>
                        <Styled.SelectContainer>
                            <Styled.Select
                                options={filteredRoles}
                                onSelect={(role) => {
                                    setSelectRoleValue(role);
                                }}
                                placeholder={'Роль'}
                            />
                            <IconButton
                                iconName={Icons.add}
                                onClick={async () => {
                                    const currentRole = filteredRoles.find(
                                        (role) => {
                                            return (
                                                role.value === selectRoleValue
                                            );
                                        }
                                    ) as StudentRoleType;
                                    //если хочет создать свою роль, то закрываем модалку с ролями и открываем модалку с навыками)
                                    if (currentRole.id === 0) {
                                        handleClose();
                                        onOpenSkillsModal();
                                        return;
                                    }
                                    await addRole(user!, currentRole);
                                    handleClose();
                                }}
                                size={24}
                            />
                        </Styled.SelectContainer>
                    </Styled.LeftSide>
                    <Styled.RightSide>
                        <img src={img} />
                    </Styled.RightSide>
                </Styled.Container>
            </Modal>
        );
    }
);
