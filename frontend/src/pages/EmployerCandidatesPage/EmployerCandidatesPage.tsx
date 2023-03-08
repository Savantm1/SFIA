import { CandidateListComponent } from '@pages/EmployerCandidatesPage/components/CandidateListComponent/CandidateListComponent';
import { CandidateProfileComponent } from '@pages/EmployerCandidatesPage/components/CandidateProfileComponent/CandidateProfileComponent';
import { CompanyInfoComponent } from '@pages/EmployerCandidatesPage/components/CompanyInfoComponent/CompanyInfoComponent';
import { useSelectCandidate } from '@pages/EmployerCandidatesPage/hooks/useSelectCandidate';
import React, { FC, memo } from 'react';

import { makeStudentMock } from '../../mock-factory/makeStudentMock';
import { makeUserMock } from '../../mock-factory/User';
import { Styled } from './styled';

export const EmployerCandidatesPage: FC = memo(() => {
    // Получили список кандидатов
    const candidates = [...Array(8).fill('')].map(() => {
        return makeStudentMock();
    });
    // Получили текущего пользователя
    const user = makeUserMock();

    const { selectedCandidate, selectCandidateHandler } = useSelectCandidate();

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
