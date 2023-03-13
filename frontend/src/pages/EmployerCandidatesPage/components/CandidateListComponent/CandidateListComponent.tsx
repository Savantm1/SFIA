import { User, Vacancy } from '@common/models';
import { EMPLOYER_ROUTES } from '@common/navigation';
import { NoCandidateComponent } from '@pages/EmployerCandidatesPage/components/NoCandidateComponent/NoCandidateComponent';
import { CandidateMiniCard } from '@scenarios/CandidateMiniCard';
import { Icons } from '@ui/assets/icons';
import { Avatar } from '@ui/components/Avatar';
import { FC, memo, useCallback, useMemo } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

import { Styled } from '../../styled';

type CandidateListComponentProps = {
    user: User;
    candidates: User[];
    selectCandidateHandler: (candidate: User | null) => () => void;
};

export const CandidateListComponent: FC<CandidateListComponentProps> = memo(
    ({ user, candidates, selectCandidateHandler }) => {
        const candidateList = useMemo(() => {
            return candidates.map((candidate) => {
                return (
                    <CandidateMiniCard
                        key={candidate.id}
                        user={candidate}
                        match={70}
                        openCandidateProfileHandler={selectCandidateHandler(
                            candidate
                        )}
                    />
                );
            });
        }, [candidates, selectCandidateHandler]);

        const navigate = useNavigate();

        const navigateVacancyHandler = useCallback(
            (id: Vacancy['id']) => {
                return () => {
                    navigate(
                        generatePath(EMPLOYER_ROUTES.vacancy, {
                            id,
                        })
                    );
                };
            },
            [navigate]
        );

        return (
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

                {!candidateList.length ? (
                    <NoCandidateComponent />
                ) : (
                    <>
                        <Styled.CandidateBlockHeader>
                            <Styled.CandidateBlockHeaderTitle>
                                Руководитель отдала продаж
                            </Styled.CandidateBlockHeaderTitle>
                            <Styled.CandidateBlockHeaderLink
                                onClick={navigateVacancyHandler('123')}
                            >
                                <span>Перейти к вакансии</span>
                                <Styled.CandidateBlockHeaderLinkButton
                                    iconName={Icons.backBlack}
                                    onClick={navigateVacancyHandler('123')}
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
                            <Styled.CandidateBlockHeaderLink
                                onClick={navigateVacancyHandler('123')}
                            >
                                <span>Перейти к вакансии</span>
                                <Styled.CandidateBlockHeaderLinkButton
                                    iconName={Icons.backBlack}
                                    onClick={navigateVacancyHandler('123')}
                                />
                            </Styled.CandidateBlockHeaderLink>
                        </Styled.CandidateBlockHeader>

                        <Styled.CandidateListWrapper>
                            {candidateList}
                        </Styled.CandidateListWrapper>
                    </>
                )}
            </Styled.Wrapper>
        );
    }
);
