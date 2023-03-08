import { useMenu } from '@pages/EmployerVacancyProfilePage/hooks/useMenu';
import Color, { KeysOfColor } from '@ui/assets/color';
import { Icons } from '@ui/assets/icons';
import { Slider } from '@ui/components/Slider';
import React, { FC, memo, useState } from 'react';

import { Styled } from './styled';

export type SkillRowProps = {
    title: string;
    color?: (typeof Color)[KeysOfColor];
    value: number;
};
export const SkillRow: FC<SkillRowProps> = memo(
    ({ title, color = Color.fuxy, value = 5 }) => {
        const { anchorEl, isMenuOpen, anchorClickHandler, closeMenuHandler } =
            useMenu();

        const [isEdited, setIsEdited] = useState(false);

        return (
            <Styled.Container>
                <Styled.Block>
                    <Styled.Title align={'left'} variant={'h5'} color={color}>
                        {title}
                    </Styled.Title>
                    <Styled.SliderWrapper>
                        <Slider
                            value={value}
                            color={color}
                            cantEdit={!isEdited}
                        />
                        <Styled.Level
                            variant={'body1'}
                            color={Color.secondaryGray}
                        >
                            {value} Ур
                        </Styled.Level>
                    </Styled.SliderWrapper>
                </Styled.Block>
                {isEdited ? (
                    <Styled.EditButtonsWrapper>
                        <Styled.EditButton
                            iconName={Icons.done}
                            onClick={() => setIsEdited(false)}
                        />
                        <Styled.EditButton
                            iconName={Icons.cancel}
                            onClick={() => setIsEdited(false)}
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
                        onClick={() => {
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
