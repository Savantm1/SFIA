import { User } from '@common/models';
import { getMatchColor } from '@scenarios/CandidateMiniCard/utils/getMatchColor';
import { Avatar } from '@ui/components/Avatar';
import { FC, memo } from 'react';

import { Styled } from './styled';

type CandidateMiniCardProps = {
    user: User;
    match: number;
    openCandidateProfileHandler: VoidFunction;
};

export const CandidateMiniCard: FC<CandidateMiniCardProps> = memo(
    ({ user, match, openCandidateProfileHandler }) => {
        const { city, role, fullName, position, phone, skillTypes } = user;

        const matchColor = getMatchColor(match);

        return (
            <Styled.ScenarioWrapper onClick={openCandidateProfileHandler}>
                <Styled.HeaderWrapper>
                    <Styled.HeaderLeftBlock>
                        <Styled.HeaderText>{city}</Styled.HeaderText>
                        <Styled.HeaderText matchColor={matchColor}>
                            Совпадение: {match}%
                        </Styled.HeaderText>
                    </Styled.HeaderLeftBlock>

                    <Styled.HeaderRightBlock>
                        <Avatar role={role} size={'md'} />
                    </Styled.HeaderRightBlock>
                </Styled.HeaderWrapper>

                <Styled.ContentWrapper>
                    <Styled.Title>{fullName}</Styled.Title>
                    <Styled.Subtitle>{position}</Styled.Subtitle>
                    <Styled.Subtitle>{phone}</Styled.Subtitle>
                    <Styled.ProgressBarsWrapper items={skillTypes} />
                </Styled.ContentWrapper>
            </Styled.ScenarioWrapper>
        );
    }
);
