import { RoleRow } from '@scenarios/RolesBlockSc/components/RoleRow/RoleRow';
import { RolesSelectionModal } from '@scenarios/RolesSelectionModal';
import { StudentRoleType } from '@store/rolesModal';
import { Icons } from '@ui/assets/icons';
import { IconButton } from '@ui/components/IconButton/IconButton';
import { FC, memo, useState } from 'react';

import { Styled } from './styled';

type RolesBlockScProps = {
    roles?: StudentRoleType[];
    showAllItemsHandler: (value: 'roles' | 'skills' | '') => void;
};
export const RolesBlockSc: FC<RolesBlockScProps> = memo(
    ({ roles = [], showAllItemsHandler }) => {
        const [showAllRoles, setShowAllRoles] = useState(false);
        const [isVisible, setIsVisible] = useState(false);
        const [studentRolesState, setStudentRolesState] =
            useState<StudentRoleType[]>(roles);
        const getNewRole = (newRole: StudentRoleType) => {
            setStudentRolesState((prevState) => {
                const updatedArray = prevState as StudentRoleType[];
                updatedArray.push(newRole);
                return updatedArray;
            });
        };

        const onOpen: VoidFunction = () => {
            setIsVisible(true);
        };
        const onClose: VoidFunction = () => {
            setIsVisible(false);
        };
        const elements = studentRolesState.map((el) => {
            return <RoleRow key={el.id} roleProps={el} />;
        });
        if (studentRolesState.length === 0) {
            return (
                <Styled.Container>
                    <RolesSelectionModal
                        handleClose={onClose}
                        open={isVisible}
                        getNewRole={getNewRole}
                    />
                    <Styled.SkillsBar>
                        <Styled.Title align={'left'} variant={'h2'}>
                            Мои Роли
                        </Styled.Title>
                        <IconButton iconName={Icons.add} onClick={onOpen} />
                    </Styled.SkillsBar>
                    {elements}
                </Styled.Container>
            );
        }

        if (studentRolesState.length > 2) {
            const cutElements = elements.slice(0, 2);
            return (
                <Styled.Container>
                    <RolesSelectionModal
                        handleClose={onClose}
                        open={isVisible}
                        getNewRole={getNewRole}
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
                        <IconButton iconName={Icons.add} onClick={onOpen} />
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
                    <RolesSelectionModal
                        handleClose={onClose}
                        open={isVisible}
                        getNewRole={getNewRole}
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
                        <IconButton iconName={Icons.add} onClick={onOpen} />
                    </Styled.SkillsBar>
                    {elements}
                </Styled.Container>
            );
        }
    }
);
