import { Vacancy } from '@common/models';
import { Styled } from '@scenarios/VacancyMiniCard/styled';
import { Icons } from '@ui/assets/icons';
import React, { FC, memo } from 'react';

type VacancyMiniCardProps = {
    vacancy: Vacancy;
};

export const VacancyMiniCard: FC<VacancyMiniCardProps> = memo(({ vacancy }) => {
    const {
        city,
        company,
        title,
        description,
        skillTypes,
        views = 0,
        responses = 0,
    } = vacancy;

    return (
        <Styled.ScenarioWrapper>
            <Styled.HeaderWrapper>
                <Styled.HeaderLeftBlock>
                    <Styled.HeaderText>{city}</Styled.HeaderText>
                    <Styled.HeaderText>{company}</Styled.HeaderText>
                </Styled.HeaderLeftBlock>

                <Styled.HeaderRightBlock>
                    <Styled.Icon src={Icons.eye} />
                    <Styled.HeaderText>{views}</Styled.HeaderText>
                </Styled.HeaderRightBlock>
            </Styled.HeaderWrapper>

            <Styled.ContentWrapper>
                <Styled.Title>{title}</Styled.Title>
                <Styled.Subtitle>{description}</Styled.Subtitle>

                <Styled.ProgressBarsWrapper items={skillTypes} />

                <Styled.Responses>Отклики: {responses}</Styled.Responses>
            </Styled.ContentWrapper>
        </Styled.ScenarioWrapper>
    );
});
