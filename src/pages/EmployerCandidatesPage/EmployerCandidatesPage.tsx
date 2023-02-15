import { CandidateMiniCard } from '@scenarios/CandidateMiniCard';
import { Icons } from '@ui/assets/icons';
import { Avatar } from '@ui/components/Avatar';
import React, { FC, memo, useMemo } from 'react';

import { makeStudentMock } from '../../mock-factory/makeStudentMock';
import { makeUserMock } from '../../mock-factory/User';
import { Styled } from './styled';

export const EmployerCandidatesPage: FC = memo(() => {
    // Получили список кандидатов
    const candidates = [...Array(10).fill('')].map(() => {
        return makeStudentMock();
    });
    // Получили текущего пользователя
    const user = makeUserMock();

    const candidateList = useMemo(() => {
        return candidates.map((candidate) => {
            return (
                <CandidateMiniCard
                    key={candidate.id}
                    user={candidate}
                    match={70}
                />
            );
        });
    }, [candidates]);

    return (
        <Styled.PageWrapper>
            <Styled.Wrapper>
                <Styled.HeaderWrapper>
                    <Styled.Title>Кандидаты</Styled.Title>
                    <Styled.AvatarWrapper>
                        <Styled.InfoWrapper>
                            <Styled.InfoCompany>
                                {user.company}
                            </Styled.InfoCompany>
                            <Styled.InfoPhone>{user.phone}</Styled.InfoPhone>
                        </Styled.InfoWrapper>
                        <Avatar role={user.role} size={'md'} />
                    </Styled.AvatarWrapper>
                </Styled.HeaderWrapper>

                <Styled.CandidateBlockHeader>
                    <Styled.CandidateBlockHeaderTitle>
                        Руководитель отдала продаж
                    </Styled.CandidateBlockHeaderTitle>
                    <Styled.CandidateBlockHeaderLink>
                        <span>Перейти к вакансии</span>
                        <Styled.CandidateBlockHeaderLinkButton
                            iconName={Icons.backBlack}
                            onClick={() => {}}
                        />
                    </Styled.CandidateBlockHeaderLink>
                </Styled.CandidateBlockHeader>

                <Styled.CandidateListWrapper>
                    {candidateList}
                </Styled.CandidateListWrapper>

                <Styled.CandidateBlockHeader>
                    <Styled.CandidateBlockHeaderTitle>
                        Руководитель отдала продаж
                    </Styled.CandidateBlockHeaderTitle>
                    <Styled.CandidateBlockHeaderLink>
                        <span>Перейти к вакансии</span>
                        <Styled.CandidateBlockHeaderLinkButton
                            iconName={Icons.backBlack}
                            onClick={() => {}}
                        />
                    </Styled.CandidateBlockHeaderLink>
                </Styled.CandidateBlockHeader>

                <Styled.CandidateListWrapper>
                    {candidateList}
                </Styled.CandidateListWrapper>
            </Styled.Wrapper>
        </Styled.PageWrapper>
    );
});
