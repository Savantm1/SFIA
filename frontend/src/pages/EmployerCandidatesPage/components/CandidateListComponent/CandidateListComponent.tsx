import { User, VacancyWithCandidates } from '@common/models';
import { NoCandidateComponent } from '@pages/EmployerCandidatesPage/components/NoCandidateComponent/NoCandidateComponent';
import { VacancyWithCandidatesComponent } from '@pages/EmployerCandidatesPage/components/VacancyWithCondidatesComponent/VacancyWithCandidatesComponent';
import { Avatar } from '@ui/components/Avatar';
import { FC, memo, useMemo } from 'react';

import { Styled } from '../../styled';

type CandidateListComponentProps = {
    user: User;
    vacanciesWithCandidates: VacancyWithCandidates[];
    selectCandidateHandler: (candidate: User | null) => () => void;
};

export const CandidateListComponent: FC<CandidateListComponentProps> = memo(
    ({ user, vacanciesWithCandidates, selectCandidateHandler }) => {
        const vacancyWithCandidatesList = useMemo(() => {
            return vacanciesWithCandidates.map((vacancyWithCandidate) => {
                return (
                    <VacancyWithCandidatesComponent
                        key={vacancyWithCandidate.vacancy.id}
                        vacancyWithCandidate={vacancyWithCandidate}
                        selectCandidateHandler={selectCandidateHandler}
                    />
                );
            });
        }, [selectCandidateHandler, vacanciesWithCandidates]);

        return (
            <Styled.Wrapper>
                <Styled.HeaderWrapper>
                    <Styled.Title>Кандидаты</Styled.Title>
                    <Styled.AvatarWrapper>
                        <Styled.InfoWrapper>
                            <Styled.InfoCompany>
                                {user.nameOrganization}
                            </Styled.InfoCompany>
                            <Styled.InfoPhone>{user.phone}</Styled.InfoPhone>
                        </Styled.InfoWrapper>
                        <Avatar role={user.role} size={'md'} />
                    </Styled.AvatarWrapper>
                </Styled.HeaderWrapper>

                {!vacanciesWithCandidates.length ? (
                    <NoCandidateComponent />
                ) : (
                    <>{vacancyWithCandidatesList}</>
                )}
            </Styled.Wrapper>
        );
    }
);
