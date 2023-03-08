import { User } from '@common/models';
import { Avatar } from '@ui/components/Avatar';
import React, { FC, memo } from 'react';

import { Styled } from './styled';

type TeamMemberMiniCardProps = {
    user: User;
    openMemberProfileHandler: VoidFunction;
};

export const TeamMemberMiniCard: FC<TeamMemberMiniCardProps> = memo(
    ({ user, openMemberProfileHandler }) => {
        const { city, role, fullName, position, phone, email, skillTypes } =
            user;

        return (
            <Styled.ScenarioWrapper onClick={openMemberProfileHandler}>
                <Styled.HeaderWrapper>
                    <Styled.HeaderLeftBlock>
                        <Styled.HeaderText>{city}</Styled.HeaderText>
                    </Styled.HeaderLeftBlock>

                    <Styled.HeaderRightBlock>
                        <Avatar role={role} size={'md'} />
                    </Styled.HeaderRightBlock>
                </Styled.HeaderWrapper>

                <Styled.ContentWrapper>
                    <Styled.Title>{fullName}</Styled.Title>
                    <Styled.Subtitle>{position}</Styled.Subtitle>
                    <Styled.Subtitle isSmallMargin={true}>
                        {phone}
                    </Styled.Subtitle>
                    <Styled.Subtitle>{email}</Styled.Subtitle>

                    <Styled.ProgressBarsWrapper items={skillTypes} />
                </Styled.ContentWrapper>
            </Styled.ScenarioWrapper>
        );
    }
);
