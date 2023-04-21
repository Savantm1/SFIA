import { useMenu } from '@pages/EmployerVacancyProfilePage/hooks/useMenu';
import { useMembersStore } from '@store/members';
import { StudentSkillType, useSkillsModalStore } from '@store/skillsModal';
import Color from '@ui/assets/color';
import { Icons } from '@ui/assets/icons';
import { Slider } from '@ui/components/Slider';
import { FC, memo, useEffect, useState } from 'react';

import { Styled } from './styled';

export type SkillRowProps = { skill: StudentSkillType };

export const MemberSkillRow: FC<SkillRowProps> = memo(({ skill }) => {
    const { id, text, color = Color.fuxy, value = 5, min = 1, max = 7 } = skill;

    const { anchorEl, isMenuOpen, anchorClickHandler, closeMenuHandler } =
        useMenu();

    const currentMember = useMembersStore((state) => state.currentMember);

    const deleteMemberSkillFromDB = useSkillsModalStore(
        (state) => state.deleteMemberSkillFromDB
    );

    const updateMemberSkillInDB = useSkillsModalStore(
        (state) => state.updateMemberSkillInDB
    );

    const [isEdited, setIsEdited] = useState(false);
    const [currentValue, setCurrentValue] = useState(value);

    useEffect(() => {
        setCurrentValue(value);
    }, [value]);

    if (!currentMember) {
        return null;
    }

    return (
        <Styled.Container>
            <Styled.Block>
                <Styled.Title align={'left'} variant={'h5'} color={color}>
                    {text}
                </Styled.Title>
                <Styled.SliderWrapper>
                    <Slider
                        setCurrentValue={setCurrentValue}
                        min={min}
                        max={max}
                        value={currentValue}
                        color={color}
                        cantEdit={!isEdited}
                    />
                    <Styled.Level variant={'body1'} color={Color.secondaryGray}>
                        {currentValue} Ур
                    </Styled.Level>
                </Styled.SliderWrapper>
            </Styled.Block>
            {isEdited ? (
                <Styled.EditButtonsWrapper>
                    <Styled.EditButton
                        iconName={Icons.done}
                        onClick={async () => {
                            await updateMemberSkillInDB(
                                currentMember,
                                id,
                                currentValue
                            );
                            setIsEdited(false);
                        }}
                    />
                    <Styled.EditButton
                        iconName={Icons.cancel}
                        onClick={() => {
                            setCurrentValue(value);
                            setIsEdited(false);
                        }}
                    />
                </Styled.EditButtonsWrapper>
            ) : (
                <Styled.MenuButton
                    id="basic-button"
                    iconName={Icons.menu}
                    aria-controls={isMenuOpen ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={isMenuOpen ? 'true' : undefined}
                    onClick={anchorClickHandler as VoidFunction}
                />
            )}

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
                        setIsEdited(true);
                        closeMenuHandler();
                    }}
                >
                    Редактировать
                </Styled.MenuItem>
                <Styled.MenuItem
                    onClick={async () => {
                        await deleteMemberSkillFromDB(currentMember, id);
                        closeMenuHandler();
                    }}
                >
                    Удалить
                </Styled.MenuItem>
            </Styled.Menu>
        </Styled.Container>
    );
});
