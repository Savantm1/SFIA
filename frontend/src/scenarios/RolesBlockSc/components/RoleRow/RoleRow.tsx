import { useMenu } from '@pages/EmployerVacancyProfilePage/hooks/useMenu';
import { ProgressBarProps } from '@scenarios/ProgressBarList';
import { StudentRoleType } from '@store/rolesModal';
import { Icons } from '@ui/assets/icons';
import { Text } from '@ui/components/Text';
import { FC, memo, useCallback, useState } from 'react';

import { Styled } from './styled';

type RoleRowProps = {
    roleProps: StudentRoleType;
    onDeleteRole: (roleId: number) => void;
    onChangeRole: (role: StudentRoleType) => void;
};
export const RoleRow: FC<RoleRowProps> = memo(
    ({ roleProps, onDeleteRole, onChangeRole }) => {
        const { anchorEl, isMenuOpen, anchorClickHandler, closeMenuHandler } =
            useMenu();
        const [isEdit, setIsEdit] = useState(false);
        const [skillTypesState, setSkillTypesState] = useState(roleProps);
        const onCancelEdit = useCallback(() => {
            setIsEdit(false);
        }, []);
        const onDeleteSkill = useCallback((currentSkill: ProgressBarProps) => {
            setSkillTypesState((prevValue) => {
                const updatedSkills = prevValue.skills.filter((skill) => {
                    return skill.title !== currentSkill.title;
                });
                prevValue.skills = updatedSkills;
                const currentValue = { ...prevValue, skills: updatedSkills };
                return currentValue;
            });
        }, []);

        const onSaveChanges = useCallback(
            async (role: StudentRoleType) => {
                await onChangeRole(role);
            },
            [onChangeRole]
        );

        const onChangeLocalValueOfSkill = useCallback(
            (currentSkillId: number, value: number) => {
                const updatedSkillTypes = skillTypesState.skills.map(
                    (skill) => {
                        if (skill.id === currentSkillId) {
                            skill.value = value;
                        }
                        return skill;
                    }
                );

                setSkillTypesState((prevValue) => {
                    prevValue.skills = updatedSkillTypes;
                    return prevValue;
                });
            },
            [skillTypesState]
        );

        return (
            <Styled.Container>
                <Styled.Content>
                    <Text align={'left'} variant={'h5'}>
                        {skillTypesState.text}
                    </Text>
                    <Styled.ProgressBarListWrapper
                        onDelete={onDeleteSkill}
                        onChange={onChangeLocalValueOfSkill}
                        items={skillTypesState.skills}
                        isEdit={isEdit}
                    />
                </Styled.Content>
                {isEdit && (
                    <Styled.Button
                        iconName={Icons.done}
                        onClick={async () => {
                            await onSaveChanges(skillTypesState);
                            setIsEdit(false);
                        }}
                    />
                )}

                <Styled.Button
                    id="basic-button"
                    iconName={isEdit ? Icons.cancel : Icons.menu}
                    aria-controls={isMenuOpen ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={isMenuOpen ? 'true' : undefined}
                    onClick={
                        isEdit
                            ? onCancelEdit
                            : (anchorClickHandler as VoidFunction)
                    }
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
                                setIsEdit(true);
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
            </Styled.Container>
        );
    }
);
