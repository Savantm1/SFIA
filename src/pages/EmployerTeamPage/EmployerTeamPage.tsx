import { TeamMemberMiniCard } from '@scenarios/TeamMemberMiniCard';
import { Icons } from '@ui/assets/icons';
import { Avatar } from '@ui/components/Avatar';
import React, { FC, memo, useMemo } from 'react';

import { makeStudentMock } from '../../mock-factory/makeStudentMock';
import { makeUserMock } from '../../mock-factory/User';
import { Styled } from './styled';

export const EmployerTeamPage: FC = memo(() => {
    // Получили список сотрудников
    const members = [...Array(10).fill('')].map(() => {
        return makeStudentMock();
    });
    // Получили текущего пользователя
    const user = makeUserMock();

    const memberList = useMemo(() => {
        return members.map((member) => {
            return <TeamMemberMiniCard key={member.id} user={member} />;
        });
    }, [members]);

    return (
        <Styled.PageWrapper>
            <Styled.Wrapper>
                <Styled.HeaderWrapper>
                    <Styled.Title>Моя команда</Styled.Title>
                    <Styled.ToolbarWrapper>
                        <Styled.PlusButton
                            iconName={Icons.add}
                            onClick={() => {}}
                        />
                        <Styled.AvatarWrapper>
                            <Styled.InfoWrapper>
                                <Styled.InfoCompany>
                                    {user.company}
                                </Styled.InfoCompany>
                                <Styled.InfoPhone>
                                    {user.phone}
                                </Styled.InfoPhone>
                            </Styled.InfoWrapper>
                            <Avatar role={user.role} size={'md'} />
                        </Styled.AvatarWrapper>
                    </Styled.ToolbarWrapper>
                </Styled.HeaderWrapper>

                <Styled.MemberListWrapper>
                    {memberList}
                </Styled.MemberListWrapper>
            </Styled.Wrapper>
        </Styled.PageWrapper>
    );
});
