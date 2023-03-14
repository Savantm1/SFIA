import { useMenu } from '@pages/EmployerVacancyProfilePage/hooks/useMenu';
import { ProgressBarProps } from '@scenarios/ProgressBarList';
import { Icons } from '@ui/assets/icons';
import { Text } from '@ui/components/Text';
import { FC, memo, useCallback, useState } from 'react';

import { Styled } from './styled';

type RoleRowProps = {
    skillTypes: ProgressBarProps[];
};
export const RoleRow: FC<RoleRowProps> = memo(({ skillTypes }) => {
    const { anchorEl, isMenuOpen, anchorClickHandler, closeMenuHandler } =
        useMenu();

    const [isEdit, setIsEdit] = useState(false);
    const [skillTypesState, setSkillTypesState] = useState(skillTypes);
    const onCancelEdit = useCallback(() => {
        setIsEdit(false);
    }, []);
    const onDeleteSkill = useCallback((currentSkill: ProgressBarProps) => {
        setSkillTypesState((prevValue) => {
            return prevValue.filter((skill) => {
                return skill.title !== currentSkill.title;
            });
        });
    }, []);
    return (
        <Styled.Container>
            <Styled.Content>
                <Text align={'left'} variant={'h5'}>
                    Инженер
                </Text>
                <Styled.ProgressBarListWrapper
                    onDelete={onDeleteSkill}
                    items={skillTypesState}
                    isEdit={isEdit}
                />
            </Styled.Content>
            <Styled.EditButton
                id="basic-button"
                iconName={isEdit ? Icons.cancel : Icons.menu}
                aria-controls={isMenuOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isMenuOpen ? 'true' : undefined}
                onClick={
                    isEdit ? onCancelEdit : (anchorClickHandler as VoidFunction)
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
                <Styled.MenuItem
                    onClick={() => {
                        closeMenuHandler();
                        setIsEdit(true);
                    }}
                >
                    Редактировать
                </Styled.MenuItem>
                <Styled.MenuItem
                    onClick={() => {
                        closeMenuHandler();
                    }}
                >
                    Удалить
                </Styled.MenuItem>
            </Styled.Menu>
        </Styled.Container>
    );
});
