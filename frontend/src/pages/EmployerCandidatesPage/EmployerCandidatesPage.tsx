import { useCurrentUser } from '@common/hooks/useCurrentUser';
import { CandidateListComponent } from '@pages/EmployerCandidatesPage/components/CandidateListComponent/CandidateListComponent';
import { CandidateProfileComponent } from '@pages/EmployerCandidatesPage/components/CandidateProfileComponent/CandidateProfileComponent';
import { useSelectCandidate } from '@pages/EmployerCandidatesPage/hooks/useSelectCandidate';
import { CompanyInfoComponent } from '@pages/EmployerVacancyPage/components/CompanyInfoComponent/CompanyInfoComponent';
import { FC, memo } from 'react';

import { makeStudentMock } from '../../mock-factory/makeStudentMock';
import { Styled } from './styled';

export const EmployerCandidatesPage: FC = memo(() => {
    // Получили список кандидатов
    const candidates = [...Array(8).fill('')].map(() => {
        return makeStudentMock();
    });

    const user = useCurrentUser();

    const { selectedCandidate, selectCandidateHandler } = useSelectCandidate();

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
                    candidates={candidates}
                    selectCandidateHandler={selectCandidateHandler}
                />
            )}
        </Styled.PageWrapper>
    );
});
