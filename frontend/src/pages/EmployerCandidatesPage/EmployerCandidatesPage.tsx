import { useCurrentUser } from '@common/hooks/useCurrentUser';
import { CandidateListComponent } from '@pages/EmployerCandidatesPage/components/CandidateListComponent/CandidateListComponent';
import { CandidateProfileComponent } from '@pages/EmployerCandidatesPage/components/CandidateProfileComponent/CandidateProfileComponent';
import { useSelectCandidate } from '@pages/EmployerCandidatesPage/hooks/useSelectCandidate';
import { CompanyInfoComponent } from '@pages/EmployerVacancyPage/components/CompanyInfoComponent/CompanyInfoComponent';
import { useVacancyCandidatePivotStore } from '@store/candidates';
import { FC, memo, useEffect } from 'react';

import { Styled } from './styled';

export const EmployerCandidatesPage: FC = memo(() => {
    const user = useCurrentUser();

    const { selectedCandidate, selectCandidateHandler } = useSelectCandidate();

    const vacanciesWithCandidates = useVacancyCandidatePivotStore(
        (state) => state.vacanciesWithCandidates
    );
    const fetchVacanciesWithCandidates = useVacancyCandidatePivotStore(
        (state) => state.fetchVacanciesWithCandidates
    );

    useEffect(() => {
        if (user) {
            fetchVacanciesWithCandidates(user.id);
        }
    }, [fetchVacanciesWithCandidates, user]);

    if (!user) {
        return null;
    }

    return (
        <Styled.PageWrapper>
            {selectedCandidate ? (
                <Styled.CandidateProfileWrapper>
                    <CandidateProfileComponent
                        candidate={selectedCandidate}
                        closeCandidateProfileHandler={selectCandidateHandler(
                            null
                        )}
                    />
                    <CompanyInfoComponent user={user} />
                </Styled.CandidateProfileWrapper>
            ) : (
                <CandidateListComponent
                    user={user}
                    vacanciesWithCandidates={vacanciesWithCandidates}
                    selectCandidateHandler={selectCandidateHandler}
                />
            )}
        </Styled.PageWrapper>
    );
});
