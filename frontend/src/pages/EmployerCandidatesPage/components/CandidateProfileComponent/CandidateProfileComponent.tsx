import { User } from '@common/models';
import { InfoList } from '@pages/EmployerCandidatesPage/components/CandidateProfileComponent/components/InfoList/InfoList';
import { Icons } from '@ui/assets/icons';
import { Avatar } from '@ui/components/Avatar';
import { FC, memo } from 'react';

import { Styled as StyledInfo } from './components/InfoList/styled';
import { Styled } from './styled';

type CandidateProfileComponentProps = {
    candidate: User;
    closeCandidateProfileHandler: VoidFunction;
};

export const CandidateProfileComponent: FC<CandidateProfileComponentProps> =
    memo(({ candidate, closeCandidateProfileHandler }) => {
        const fullName = `${candidate.secondName} ${candidate.firstName}${
            candidate.studentPatronymic ? ' ' + candidate.studentPatronymic : ''
        }`;

        return (
            <Styled.Wrapper>
                <Styled.HeaderWrapper>
                    <Styled.TitleWrapper>
                        <Styled.BackButton
                            iconName={Icons.backBlack}
                            onClick={closeCandidateProfileHandler}
                        />
                        <Styled.Title>{fullName}</Styled.Title>
                    </Styled.TitleWrapper>
                    <Styled.MenuButton
                        iconName={Icons.menu}
                        onClick={() => {}}
                    />
                </Styled.HeaderWrapper>

                <Styled.GeneralInfoWrapper>
                    <Styled.TextInfoWrapper>
                        <Styled.BigText>{fullName}</Styled.BigText>
                        <Styled.Text>
                            Должность: {candidate.position}
                        </Styled.Text>
                        <Styled.Text>
                            Номер телефона: {candidate.phone}
                        </Styled.Text>
                        <Styled.Text>Город: {candidate.city}</Styled.Text>
                    </Styled.TextInfoWrapper>
                    <Avatar role={candidate.role} size={'sobig'} />
                </Styled.GeneralInfoWrapper>

                <Styled.Text>{candidate.about}</Styled.Text>

                <StyledInfo.Title>{'Навыки:'}</StyledInfo.Title>
                <Styled.ProgressBar items={candidate.skillTypes} isBig={true} />

                <InfoList title={'Опыт:'} text={candidate.experience} />
                <InfoList title={'Образование:'} text={candidate.education} />
            </Styled.Wrapper>
        );
    });
