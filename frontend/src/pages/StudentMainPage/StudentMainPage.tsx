import { useCurrentUser } from '@common/hooks/useCurrentUser';
import { LeftSideContent } from '@pages/StudentMainPage/components/LeftSideContent/LeftSideContent';
import { RightSideContent } from '@pages/StudentMainPage/components/RightSideContent/RightSideContent';
import { WelcomeTitle } from '@pages/StudentMainPage/components/WelcomeTitle/WelcomeTitle';
import { FC, memo } from 'react';

import { Styled } from './styled';

export const StudentMainPage: FC = memo(() => {
    const currentUser = useCurrentUser();

    if (!currentUser) {
        return null;
    }

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
                <RightSideContent user={currentUser} />
            </Styled.RightSide>
        </Styled.PageWrapper>
    );
});
