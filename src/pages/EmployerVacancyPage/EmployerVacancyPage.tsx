import { Styled } from '@pages/EmployerVacancyPage/styled';
import { Icons } from '@ui/assets/icons';
import { IconButton } from '@ui/components/IconButton/IconButton';
import { FC, memo } from 'react';

export const EmployerVacancyPage: FC = memo(() => {
    return (
        <Styled.PageWrapper>
            <Styled.HeaderWrapper>
                <Styled.Title>Мои вакансии</Styled.Title>
                <IconButton iconName={Icons.add} onClick={() => {}} />
            </Styled.HeaderWrapper>
        </Styled.PageWrapper>
    );
});
