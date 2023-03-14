import { Styled } from '@bless-components/PageWrapperView/styled';
import { useCurrentUser } from '@common/hooks/useCurrentUser';
import { MAIN_ROUTES } from '@common/navigation';
import { LinksType } from '@common/navigation/links';
import { FC, memo, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Sidebar } from './components/Sidebar';

type PageWrapperViewProps = {
    links: LinksType;
};
export const PageWrapperView: FC<PageWrapperViewProps> = memo(({ links }) => {
    const currentUser = useCurrentUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentUser) {
            navigate(MAIN_ROUTES.login);
        }
    }, [currentUser, navigate]);

    return (
        <Styled.MainWrapper>
            <Sidebar links={links} />
            <Styled.ContentWrapper>
                <Outlet />
            </Styled.ContentWrapper>
        </Styled.MainWrapper>
    );
});
