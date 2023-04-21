import { useCurrentUser } from '@common/hooks/useCurrentUser';
import { LeftSideContent } from '@pages/MemberProfilePage/components/LeftSideContent/LeftSideContent';
import { RightSideContent } from '@pages/MemberProfilePage/components/RightSideContent/RightSideContent';
import { WelcomeTitle } from '@pages/MemberProfilePage/components/WelcomeTitle/WelcomeTitle';
import { WELCOME_BLOCK_SUBTITLES } from '@pages/StudentMainPage/components/WelcomeTitle/constants';
import { useMembersStore } from '@store/members';
import { FC, memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Styled } from './styled';

export const MemberProfilePage: FC = memo(() => {
    const { id = '' } = useParams();
    const currentUser = useCurrentUser();
    const currentMember = useMembersStore((state) => state.currentMember);
    const getMemberById = useMembersStore((state) => state.getMemberById);

    useEffect(() => {
        getMemberById(id);
    }, [getMemberById, id]);

    if (!currentMember || !currentUser) {
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
                <RightSideContent user={currentUser} member={currentMember} />
            </Styled.RightSide>
        </Styled.PageWrapper>
    );
});
