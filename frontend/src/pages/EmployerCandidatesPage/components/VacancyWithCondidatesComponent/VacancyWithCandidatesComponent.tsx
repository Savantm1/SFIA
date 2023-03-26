import { User, VacancyWithCandidates } from '@common/models';
import { EMPLOYER_ROUTES } from '@common/navigation';
import { CandidateMiniCard } from '@scenarios/CandidateMiniCard';
import { Icons } from '@ui/assets/icons';
import { FC, memo, useCallback, useMemo } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';

import { Styled } from '../../styled';

type VacancyWithCandidatesComponentProps = {
    vacancyWithCandidate: VacancyWithCandidates;
    selectCandidateHandler: (candidate: User | null) => () => void;
};

export const VacancyWithCandidatesComponent: FC<VacancyWithCandidatesComponentProps> =
    memo(({ vacancyWithCandidate, selectCandidateHandler }) => {
        const { vacancy, candidates } = vacancyWithCandidate;
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

        const navigateVacancyHandler = useCallback(() => {
            navigate(
                generatePath(EMPLOYER_ROUTES.vacancy, {
                    id: vacancy.id,
                })
            );
        }, [navigate, vacancy.id]);

        return (
            <>
                <Styled.CandidateBlockHeader>
                    <Styled.CandidateBlockHeaderTitle>
                        {vacancy.title}
                    </Styled.CandidateBlockHeaderTitle>
                    <Styled.CandidateBlockHeaderLink
                        onClick={navigateVacancyHandler}
                    >
                        <span>Перейти к вакансии</span>
                        <Styled.CandidateBlockHeaderLinkButton
                            iconName={Icons.backBlack}
                            onClick={navigateVacancyHandler}
                        />
                    </Styled.CandidateBlockHeaderLink>
                </Styled.CandidateBlockHeader>

                <Styled.CandidateListWrapper>
                    {candidateList}
                </Styled.CandidateListWrapper>
            </>
        );
    });
