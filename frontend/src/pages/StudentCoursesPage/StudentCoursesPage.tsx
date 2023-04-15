import { useCurrentUser } from '@common/hooks/useCurrentUser';
import { LeftSideContent } from '@pages/StudentMainPage/components/LeftSideContent/LeftSideContent';
import { RightSideContent } from '@pages/StudentMainPage/components/RightSideContent/RightSideContent';
import { WELCOME_BLOCK_SUBTITLES } from '@pages/StudentMainPage/components/WelcomeTitle/constants';
import { WelcomeTitle } from '@pages/StudentMainPage/components/WelcomeTitle/WelcomeTitle';
import { Styled } from '@pages/StudentMainPage/styled';
import { FC, memo } from 'react';

export const StudentCoursesPage: FC = memo(() => {
    const currentUser = useCurrentUser();

    if (!currentUser) {
        return null;
    }

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
                <RightSideContent user={currentUser} />
            </Styled.RightSide>
        </Styled.PageWrapper>
    );
});
