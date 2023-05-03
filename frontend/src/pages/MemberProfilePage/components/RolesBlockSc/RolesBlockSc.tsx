import { Member } from '@common/models/Member';
import { SkillsSelectionModal } from '@scenarios/SkillsSelectionModal';
import { useMemberRolesModalStore } from '@store/memberRolesModal';
import { StudentSkillType } from '@store/skillsModal';
import { Icons } from '@ui/assets/icons';
import { IconButton } from '@ui/components/IconButton/IconButton';
import { FC, memo, useCallback, useMemo, useState } from 'react';

import { RolesSelectionModal } from '../RolesSelectionModal';
import { SaveRoleModal } from '../SaveRoleModal';
import { RoleRow } from './components/RoleRow/RoleRow';
import { useModals } from './hooks/useModals';
import { Styled } from './styled';

type RolesBlockScProps = {
    member: Member;
    showAllItemsHandler: (value: 'roles' | 'skills' | '') => void;
};
export const RolesBlockSc: FC<RolesBlockScProps> = memo(
    ({ member, showAllItemsHandler }) => {
        const onDeleteRole = useMemberRolesModalStore(
            (state) => state.deleteRole
        );
        const onDeleteRoleHandler = useCallback(
            (roleId: number) => {
                onDeleteRole(member, roleId);
            },
            [onDeleteRole, member]
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

        const roles = useMemo(() => {
            return member.roles ?? [];
        }, [member.roles]);

        const elements = useMemo(
            () =>
                roles.map((el) => {
                    return (
                        <RoleRow
                            key={el.id}
                            roleProps={el}
                            onDeleteRole={onDeleteRoleHandler}
                        />
                    );
                }),
            [roles, onDeleteRoleHandler]
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
                        updatedModalData={[]}
                        open={skillsSelectionModalIsVisible}
                        handleClose={onCloseSkillsSelectionModal}
                        getDataHandler={(selectedData) => {
                            setSelectedSkillsArray(selectedData);
                            onCloseSkillsSelectionModal();
                            onOpenSaveRolesModal();
                        }}
                    />
                    <RolesSelectionModal
                        handleClose={onCloseRolesSelectionModal}
                        open={isVisibleRolesSelectionModal}
                        onOpenSkillsModal={onOpenSkillsSelectionModal}
                    />
                    <Styled.SkillsBar>
                        <Styled.Title align={'left'} variant={'h2'}>
                            {'Роли сотрудника'}
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
                        updatedModalData={[]}
                        open={skillsSelectionModalIsVisible}
                        handleClose={onCloseSkillsSelectionModal}
                        getDataHandler={(selectedData) => {
                            setSelectedSkillsArray(selectedData);
                            onCloseSkillsSelectionModal();
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
                                onClick={() => {
                                    setShowAllRoles(false);
                                    showAllItemsHandler('');
                                }}
                            />
                        )}
                        <Styled.Title align={'left'} variant={'h2'}>
                            {'Роли сотрудника'}
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
                        updatedModalData={[]}
                        open={skillsSelectionModalIsVisible}
                        handleClose={onCloseSkillsSelectionModal}
                        getDataHandler={(selectedData) => {
                            setSelectedSkillsArray(selectedData);
                            onCloseSkillsSelectionModal();
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
                            {'Роли сотрудника'}
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
