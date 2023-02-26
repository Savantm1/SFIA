import { LeftSideContent } from '@pages/StudentMainPage/components/LeftSideContent/LeftSideContent';
import { RightSideContent } from '@pages/StudentMainPage/components/RightSideContent/RightSideContent';
import { WELCOME_BLOCK_SUBTITLES } from '@pages/StudentMainPage/components/WelcomeTitle/constants';
import { WelcomeTitle } from '@pages/StudentMainPage/components/WelcomeTitle/WelcomeTitle';
import { Styled } from '@pages/StudentMainPage/styled';
import React, { FC, memo } from 'react';

import { makeStudentMock } from '../../mock-factory/makeStudentMock';

export const StudentCoursesPage: FC = memo(() => {
    const STUDENT_MOCK = makeStudentMock();

    return (
        <Styled.PageWrapper>
            <Styled.LeftSide>
                <Styled.PageTitle variant={'h1'} align={'left'}>
                    Рекомендованные курсы
                </Styled.PageTitle>
                <WelcomeTitle subtitle={WELCOME_BLOCK_SUBTITLES.second} />
                <LeftSideContent variant={'2'} />
            </Styled.LeftSide>
            <Styled.RightSide>
                <RightSideContent user={STUDENT_MOCK} />
            </Styled.RightSide>
        </Styled.PageWrapper>
    );
});
