import { useCurrentUser } from '@common/hooks/useCurrentUser';
import { LeftSideContent } from '@pages/StudentMainPage/components/LeftSideContent/LeftSideContent';
import { RightSideContent } from '@pages/StudentMainPage/components/RightSideContent/RightSideContent';
import { WelcomeTitle } from '@pages/StudentMainPage/components/WelcomeTitle/WelcomeTitle';
import { FC, memo, useEffect, useState } from 'react';

import { makeStudentMock } from '../../mock-factory/makeStudentMock';
import { Styled } from './styled';

export const StudentMainPage: FC = memo(() => {
    const currentUser = useCurrentUser();
    const [studentState, setStudentState] = useState({
        ...makeStudentMock(),
        ...currentUser,
    });

    useEffect(() => {
        setStudentState({ ...makeStudentMock(), ...currentUser });
    }, [currentUser]);

    return (
        <Styled.PageWrapper>
            <Styled.LeftSide>
                <Styled.PageTitle variant={'h1'} align={'left'}>
                    Главная
                </Styled.PageTitle>
                <WelcomeTitle />
                <LeftSideContent variant={'1'} />
            </Styled.LeftSide>
            <Styled.RightSide>
                <RightSideContent user={studentState} />
            </Styled.RightSide>
        </Styled.PageWrapper>
    );
});
