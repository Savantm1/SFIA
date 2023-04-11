import { useCurrentUser } from '@common/hooks/useCurrentUser';
import { RoleRow } from '@scenarios/RolesBlockSc/components/RoleRow/RoleRow';
import { RolesSelectionModal } from '@scenarios/RolesSelectionModal';
import { SaveRoleModal } from '@scenarios/SaveRoleModal';
import { SkillsSelectionModal } from '@scenarios/SkillsSelectionModal';
import { StudentRoleType, useRolesModalStore } from '@store/rolesModal';
import { StudentSkillType } from '@store/skillsModal';
import { Icons } from '@ui/assets/icons';
import { IconButton } from '@ui/components/IconButton/IconButton';
import { FC, memo, useCallback, useMemo, useState } from 'react';

import { useModals } from './hooks/useModals';
import { Styled } from './styled';

type RolesBlockScProps = {
    roles?: StudentRoleType[];
    showAllItemsHandler: (value: 'roles' | 'skills' | '') => void;
};
export const RolesBlockSc: FC<RolesBlockScProps> = memo(
    ({ roles = [], showAllItemsHandler }) => {
        const onDeleteRole = useRolesModalStore((state) => state.deleteRole);
        const onEditRole = useRolesModalStore((state) => state.editRole);
        const user = useCurrentUser();

        const onChangeRole = useCallback(
            (role: StudentRoleType) => {
                onEditRole(user!, role);
            },
            [onEditRole, user]
        );
        const onDeleteRoleHandler = useCallback(
            (roleId: number) => {
                onDeleteRole(user!, roleId);
            },
            [onDeleteRole, user]
        );
        const {
            skillsSelectionModalIsVisible,
            isVisibleRolesSelectionModal,
            saveRoleModalIsVisible,
            onOpenSkillsSelectionModal,
            onCloseSkillsSelectionModal,
            onOpenRolesSelectionModal,
            onCloseRolesSelectionModal,
            onCloseSaveRolesModal,
            onOpenSaveRolesModal,
        } = useModals();

        const [showAllRoles, setShowAllRoles] = useState(false);

        const [selectedSkillsArray, setSelectedSkillsArray] = useState<
            StudentSkillType[]
        >([]);

        const elements = useMemo(
            () =>
                roles.map((el) => {
                    return (
                        <RoleRow
                            key={el.id}
                            roleProps={el}
                            onDeleteRole={onDeleteRoleHandler}
                            onChangeRole={onChangeRole}
                        />
                    );
                }),
            [onChangeRole, onDeleteRoleHandler, roles]
        );
        if (roles.length === 0) {
            return (
                <Styled.Container>
                    <SaveRoleModal
                        open={saveRoleModalIsVisible}
                        skills={selectedSkillsArray}
                        handleClose={onCloseSaveRolesModal}
                    />
                    <SkillsSelectionModal
                        forRoles={true}
                        open={skillsSelectionModalIsVisible}
                        handleClose={onCloseSkillsSelectionModal}
                        getDataHandler={(selectedData) => {
                            setSelectedSkillsArray(selectedData);
                            onCloseSkillsSelectionModal();
                        }}
                    />
                    <RolesSelectionModal
                        handleClose={onCloseRolesSelectionModal}
                        open={isVisibleRolesSelectionModal}
                        // getNewRole={getNewRole}
                        onOpenSkillsModal={onOpenSkillsSelectionModal}
                    />
                    <Styled.SkillsBar>
                        <Styled.Title align={'left'} variant={'h2'}>
                            Мои Роли
                        </Styled.Title>
                        <IconButton
                            iconName={Icons.add}
                            onClick={onOpenRolesSelectionModal}
                        />
                    </Styled.SkillsBar>
                    {elements}
                </Styled.Container>
            );
        }

        if (roles.length > 2) {
            const cutElements = elements.slice(0, 2);
            return (
                <Styled.Container>
                    <SaveRoleModal
                        skills={selectedSkillsArray}
                        open={saveRoleModalIsVisible}
                        handleClose={onCloseSaveRolesModal}
                    />
                    <SkillsSelectionModal
                        forRoles={true}
                        open={skillsSelectionModalIsVisible}
                        handleClose={onCloseSkillsSelectionModal}
                        getDataHandler={() => {
                            onOpenSaveRolesModal();
                        }}
                    />
                    <RolesSelectionModal
                        handleClose={onCloseRolesSelectionModal}
                        open={isVisibleRolesSelectionModal}
                        // getNewRole={getNewRole}
                        onOpenSkillsModal={onOpenSkillsSelectionModal}
                    />
                    <Styled.SkillsBar>
                        {showAllRoles && (
                            <Styled.BackButton
                                onClick={() => {
                                    setShowAllRoles(false);
                                    showAllItemsHandler('');
                                }}
                            />
                        )}
                        <Styled.Title align={'left'} variant={'h2'}>
                            Мои Роли
                        </Styled.Title>
                        <IconButton
                            iconName={Icons.add}
                            onClick={onOpenRolesSelectionModal}
                        />
                    </Styled.SkillsBar>
                    {showAllRoles ? elements : cutElements}
                    {!showAllRoles && (
                        <Styled.ShowAllBtn
                            onClick={() => {
                                setShowAllRoles(true);
                                showAllItemsHandler('roles');
                            }}
                        >
                            Смотреть все
                        </Styled.ShowAllBtn>
                    )}
                </Styled.Container>
            );
        } else {
            return (
                <Styled.Container>
                    <SaveRoleModal
                        skills={selectedSkillsArray}
                        open={saveRoleModalIsVisible}
                        handleClose={onCloseSaveRolesModal}
                    />
                    <SkillsSelectionModal
                        forRoles={true}
                        open={skillsSelectionModalIsVisible}
                        handleClose={onCloseSkillsSelectionModal}
                        getDataHandler={() => {
                            onOpenSaveRolesModal();
                        }}
                    />
                    <RolesSelectionModal
                        handleClose={onCloseRolesSelectionModal}
                        open={isVisibleRolesSelectionModal}
                        onOpenSkillsModal={onOpenSkillsSelectionModal}
                    />
                    <Styled.SkillsBar>
                        {showAllRoles && (
                            <Styled.BackButton
                                onClick={() => setShowAllRoles(false)}
                            />
                        )}
                        <Styled.Title align={'left'} variant={'h2'}>
                            Мои Роли
                        </Styled.Title>
                        <IconButton
                            iconName={Icons.add}
                            onClick={onOpenRolesSelectionModal}
                        />
                    </Styled.SkillsBar>
                    {elements}
                </Styled.Container>
            );
        }
    }
);
