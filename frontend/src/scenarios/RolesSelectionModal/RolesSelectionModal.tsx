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
    getNewRole: (newRole: StudentRoleType) => void;
};
export const RolesSelectionModal: FC<RolesSelectionModalProps> = memo(
    ({ open, handleClose, getNewRole }) => {
        const [selectRoleValue, setSelectRoleValue] = useState('');
        const roles = useRolesModalStore((state) => state.studentRoles);
        const getRoles = useRolesModalStore((state) => state.getRoles);
        const addRole = useRolesModalStore((state) => state.addRole);
        const user = useCurrentUser();
        useEffect(() => {
            getRoles();
        }, [open, getRoles]);

        return (
            <Modal
                onClose={() => {
                    handleClose();
                }}
                isOpen={open}
            >
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </Styled.Description>
                        <Styled.SelectContainer>
                            <Styled.Select
                                options={roles}
                                onSelect={(role) => {
                                    setSelectRoleValue(role);
                                }}
                                placeholder={'Роль'}
                            />
                            <IconButton
                                iconName={Icons.add}
                                onClick={() => {
                                    console.log('role', selectRoleValue);
                                    setTimeout(() => {
                                        const currentRole = roles.find(
                                            (role) => {
                                                return (
                                                    role.value ===
                                                    selectRoleValue
                                                );
                                            }
                                        ) as StudentRoleType;
                                        console.log(currentRole);
                                        addRole(user!, currentRole);
                                        getNewRole(currentRole);
                                        handleClose();
                                    }, 2000);
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
