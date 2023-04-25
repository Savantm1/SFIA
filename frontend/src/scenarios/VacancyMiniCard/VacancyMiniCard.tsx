import { User, Vacancy } from '@common/models';
import { Styled } from '@scenarios/VacancyMiniCard/styled';
import { Icons } from '@ui/assets/icons';
import { FC, memo } from 'react';

type VacancyMiniCardProps = {
    city: User['city'];
    company: User['nameOrganization'];
    vacancy: Vacancy;
    openVacancyProfileHandler: VoidFunction;
    skillsGap?: number;
};

export const VacancyMiniCard: FC<VacancyMiniCardProps> = memo(
    ({ city, company, vacancy, openVacancyProfileHandler, skillsGap }) => {
        const {
            title,
            description,
            skillTypes,
            views = 0,
            responses = 0,
        } = vacancy;

        return (
            <Styled.ScenarioWrapper onClick={openVacancyProfileHandler}>
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

                    <Styled.ProgressBarsWrapper
                        items={skillTypes.slice(0, 4)}
                        skillsGap={skillsGap}
                        carousel={false}
                    />

                    <Styled.Responses>Отклики: {responses}</Styled.Responses>
                </Styled.ContentWrapper>
            </Styled.ScenarioWrapper>
        );
    }
);
