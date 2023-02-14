import { LeftSideContent } from '@pages/StudentMainPage/components/LeftSideContent/LeftSideContent';
import { RightSideContent } from '@pages/StudentMainPage/components/RightSideContent/RightSideContent';
import { WelcomeTitle } from '@pages/StudentMainPage/components/WelcomeTitle/WelcomeTitle';
import React, { FC, memo } from 'react';

import { makeStudentMock } from '../../mock-factory/makeStudentMock';
import { Styled } from './styled';

export const StudentMainPage: FC = memo(() => {
    const STUDENT_MOCK = makeStudentMock();

    return (
        <Styled.PageWrapper>
            <Styled.LeftSide>
                <Styled.PageTitle variant={'h1'} align={'left'}>
                    Рекомендованные курсы
                </Styled.PageTitle>
                <WelcomeTitle />
                <LeftSideContent variant={'1'} />
            </Styled.LeftSide>
            <Styled.RightSide>
                <RightSideContent user={STUDENT_MOCK} />
            </Styled.RightSide>
        </Styled.PageWrapper>
    );
});
