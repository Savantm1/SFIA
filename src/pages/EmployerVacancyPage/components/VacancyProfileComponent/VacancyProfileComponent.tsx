import { Vacancy } from '@common/models';
import { InfoList } from '@pages/EmployerVacancyPage/components/VacancyProfileComponent/components/InfoList/InfoList';
import { formatAmount } from '@pages/EmployerVacancyPage/utils/formatAmount';
import { Icons } from '@ui/assets/icons';
import image from '@ui/assets/images/phone.png';
import React, { FC, memo, useState } from 'react';

import { Styled } from './styled';

type VacancyProfileComponentProps = {
    vacancy: Vacancy;
    closeVacancyProfileHandler: VoidFunction;
};

export const VacancyProfileComponent: FC<VacancyProfileComponentProps> = memo(
    ({ vacancy, closeVacancyProfileHandler }) => {
        const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
        const open = Boolean(anchorEl);
        const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };

        return (
            <Styled.Wrapper>
                <Styled.HeaderWrapper>
                    <Styled.TitleWrapper>
                        <Styled.BackButton
                            iconName={Icons.backBlack}
                            onClick={closeVacancyProfileHandler}
                        />
                        <Styled.Title>{vacancy.title}</Styled.Title>
                    </Styled.TitleWrapper>
                    <Styled.MenuButton
                        id="basic-button"
                        iconName={Icons.menu}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick as VoidFunction}
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
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <Styled.MenuItem onClick={handleClose}>
                            Редактировать
                        </Styled.MenuItem>
                        <Styled.MenuItem onClick={handleClose}>
                            Удалить
                        </Styled.MenuItem>
                    </Styled.Menu>
                </Styled.HeaderWrapper>

                <Styled.GeneralInfoWrapper>
                    <Styled.TextInfoWrapper>
                        <Styled.BigText>
                            {formatAmount(+vacancy.salary)} р до вычета налога
                        </Styled.BigText>
                        <Styled.Text>
                            Опыт: {vacancy.experience} лет
                        </Styled.Text>
                        <Styled.Text>
                            Занятость: {vacancy.employment}
                        </Styled.Text>
                        <Styled.Text>График: {vacancy.schedule}</Styled.Text>
                    </Styled.TextInfoWrapper>
                    <Styled.Image src={image}></Styled.Image>
                </Styled.GeneralInfoWrapper>

                <Styled.Text>{vacancy.fullDescription}</Styled.Text>

                <InfoList
                    title={'Обязанности:'}
                    list={vacancy.responsibilities.split(';')}
                />
                <InfoList
                    title={'Требования:'}
                    list={vacancy.requirements.split(';')}
                />
                <InfoList
                    title={'Условия:'}
                    list={vacancy.conditions.split(';')}
                />
            </Styled.Wrapper>
        );
    }
);
