import { Role } from '@common/models';
import { CandidateMiniCard } from '@scenarios/CandidateMiniCard';
import { TeamMemberMiniCard } from '@scenarios/TeamMemberMiniCard';
import { VacancyMiniCard } from '@scenarios/VacancyMiniCard/VacancyMiniCard';
import Color from '@ui/assets/color';
import { FC, memo } from 'react';

import { Styled } from './styled';

export const ScenariosPage: FC = memo(() => {
    const skillTypes = [
        { title: 'ITSP', subtitle: '6 ур', value: 75, color: Color.fuxy },
        { title: 'PEMT', subtitle: '5 ур', value: 60, color: Color.deepBlue },
        { title: 'SUPP', subtitle: '7 ур', value: 100, color: Color.green },
        { title: 'DCMA', subtitle: '4 ур', value: 50, color: Color.orange },
    ];

    const vacancyProps = {
        city: 'Москва',
        company: 'ООО “Красти”',
        title: 'Руководитель отдела продаж',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        skillTypes: skillTypes,
        views: 342,
        responses: 23,
    };

    const candidateProps = {
        user: {
            id: 1,
            role: Role.EMPLOYER,
            fullname: 'Годунов Михаил Васильевич',
            position: 'Руководитель отдела продаж',
            phone: '+7 (976)677-87-87',
            email: 'uvidel@ti.pisya',
            city: 'Москва',
        },
        match: 70,
        skillTypes: skillTypes,
    };

    return (
        <Styled.ScenarioWrapper>
            <Styled.VacancyMiniCardWrapper>
                <VacancyMiniCard {...vacancyProps} />
            </Styled.VacancyMiniCardWrapper>

            <Styled.CandidateMiniCardWrapper>
                <CandidateMiniCard {...candidateProps} />
            </Styled.CandidateMiniCardWrapper>

            <Styled.CandidateMiniCardWrapper>
                <TeamMemberMiniCard {...candidateProps} />
            </Styled.CandidateMiniCardWrapper>
        </Styled.ScenarioWrapper>
    );
});
