import { Styled } from '@pages/EmployerVacancyPage/styled';
import { VacancyMiniCard } from '@scenarios/VacancyMiniCard';
import { Icons } from '@ui/assets/icons';
import { Avatar } from '@ui/components/Avatar';
import { IconButton } from '@ui/components/IconButton/IconButton';
import React, { FC, memo, useMemo } from 'react';

import { makeUserMock } from '../../mock-factory/User';
import { makeVacancyMock } from '../../mock-factory/Vacancy';

export const EmployerVacancyPage: FC = memo(() => {
    // Получили откуда-то список вакансий
    const vacancies = [...Array(4).fill('')].map(() => {
        return makeVacancyMock();
    });
    const { role, company, city, site, phone, email, about } = makeUserMock();

    const vacancyList = useMemo(() => {
        return vacancies.map((vacancy) => {
            return <VacancyMiniCard key={vacancy.id} vacancy={vacancy} />;
        });
    }, [vacancies]);

    return (
        <Styled.PageWrapper>
            <Styled.LeftSideWrapper>
                <Styled.HeaderWrapper>
                    <Styled.Title>Мои вакансии</Styled.Title>
                    <IconButton iconName={Icons.add} onClick={() => {}} />
                </Styled.HeaderWrapper>

                <Styled.VacancyListWrapper>
                    {vacancyList}
                </Styled.VacancyListWrapper>
            </Styled.LeftSideWrapper>

            <Styled.RightSideWrapper>
                <Styled.AvatarWrapper>
                    <Styled.InfoWrapper>
                        <Styled.InfoCompany>{company}</Styled.InfoCompany>
                        <Styled.InfoPhone>{phone}</Styled.InfoPhone>
                    </Styled.InfoWrapper>
                    <Avatar role={role} size={'md'} />
                </Styled.AvatarWrapper>

                <Styled.TitleCompany>{company}</Styled.TitleCompany>
                <Styled.City>{city}</Styled.City>
                <Styled.Link href={site}>{site}</Styled.Link>
                <Styled.Link href={'to:' + email}>{email}</Styled.Link>
                <Styled.Description>{about}</Styled.Description>
            </Styled.RightSideWrapper>
        </Styled.PageWrapper>
    );
});
