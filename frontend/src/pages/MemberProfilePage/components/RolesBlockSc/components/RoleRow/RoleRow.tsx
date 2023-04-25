import { useMenu } from '@pages/EmployerVacancyProfilePage/hooks/useMenu';
import { SkillsSelectionModal } from '@scenarios/SkillsSelectionModal';
import { useMemberRolesModalStore } from '@store/memberRolesModal';
import { useMembersStore } from '@store/members';
import { StudentRoleType } from '@store/rolesModal';
import { Icons } from '@ui/assets/icons';
import { Text } from '@ui/components/Text';
import { FC, memo, useCallback, useState } from 'react';

import { Styled } from './styled';

type RoleRowProps = {
    roleProps: StudentRoleType;
    onDeleteRole: (roleId: number) => void;
};

export const RoleRow: FC<RoleRowProps> = memo(({ roleProps, onDeleteRole }) => {
    const currentMember = useMembersStore((state) => state.currentMember);
    const [skillsSelectionModalIsVisible, setSkillsSelectionModalIsVisible] =
        useState(false);
    const onCloseSkillsSelectionModal = useCallback(() => {
        setSkillsSelectionModalIsVisible(false);
    }, []);

    const onOpenSkillsSelectionModal = useCallback(() => {
        setSkillsSelectionModalIsVisible(true);
    }, []);

    const onEditRole = useMemberRolesModalStore((state) => {
        return state.editRole;
    });

    const { anchorEl, isMenuOpen, anchorClickHandler, closeMenuHandler } =
        useMenu();

    if (!currentMember) {
        return null;
    }

    return (
        <Styled.Container>
            <Styled.Content>
                <Text align={'left'} variant={'h5'}>
                    {roleProps.text}
                </Text>
                <Styled.ProgressBarListWrapper
                    items={roleProps.skills}
                    carousel={false}
                />
            </Styled.Content>

            <Styled.Button
                id="basic-button"
                iconName={Icons.menu}
                aria-controls={isMenuOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isMenuOpen ? 'true' : undefined}
                onClick={anchorClickHandler as VoidFunction}
            />
            <Styled.Menu
                id="basic-menu"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={closeMenuHandler}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {roleProps.canEdit && (
                    <Styled.MenuItem
                        onClick={() => {
                            closeMenuHandler();
                            onOpenSkillsSelectionModal();
                        }}
                    >
                        Редактировать
                    </Styled.MenuItem>
                )}

                <Styled.MenuItem
                    onClick={async () => {
                        await onDeleteRole(roleProps.id);
                        closeMenuHandler();
                    }}
                >
                    Удалить
                </Styled.MenuItem>
            </Styled.Menu>
            <SkillsSelectionModal
                key={roleProps.id}
                open={skillsSelectionModalIsVisible}
                handleClose={onCloseSkillsSelectionModal}
                updatedModalData={roleProps.skills}
                getDataHandler={async (selectedData) => {
                    await onEditRole(currentMember, roleProps.id, selectedData);
                }}
                forRoles={true}
            />
        </Styled.Container>
    );
});
