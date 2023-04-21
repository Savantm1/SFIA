import { Role } from '@common/models';
import { Member } from '@common/models/Member';
import { Avatar } from '@ui/components/Avatar';
import { FC, memo } from 'react';

import { Styled } from './styled';

type TeamMemberMiniCardProps = {
    member: Member;
    openMemberProfileHandler: VoidFunction;
};

export const TeamMemberMiniCard: FC<TeamMemberMiniCardProps> = memo(
    ({ member, openMemberProfileHandler }) => {
        const {
            firstName,
            secondName,
            patronymic,
            position,
            phone,
            email,
            skills = [],
        } = member;

        const fullName = `${secondName} ${firstName}${
            patronymic ? ' ' + patronymic : ''
        }`;

        return (
            <Styled.ScenarioWrapper onClick={openMemberProfileHandler}>
                <Styled.HeaderWrapper>
                    <Styled.HeaderLeftBlock>
                        <Styled.HeaderText></Styled.HeaderText>
                    </Styled.HeaderLeftBlock>

                    <Styled.HeaderRightBlock>
                        <Avatar role={Role.STUDENT} size={'md'} />
                    </Styled.HeaderRightBlock>
                </Styled.HeaderWrapper>

                <Styled.ContentWrapper>
                    <Styled.Title>{fullName}</Styled.Title>
                    <Styled.Subtitle>{position}</Styled.Subtitle>
                    <Styled.Subtitle isSmallMargin={true}>
                        {phone}
                    </Styled.Subtitle>
                    <Styled.Subtitle>{email}</Styled.Subtitle>

                    <Styled.ProgressBarsWrapper items={skills} />
                </Styled.ContentWrapper>
            </Styled.ScenarioWrapper>
        );
    }
);
