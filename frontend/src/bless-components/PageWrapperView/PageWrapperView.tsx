import { useAuthCheck } from '@bless-components/PageWrapperView/hooks/useAuthCheck';
import { Styled } from '@bless-components/PageWrapperView/styled';
import { Role } from '@common/models';
import { LinksType } from '@common/navigation/links';
import { FC, memo } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from './components/Sidebar';

type PageWrapperViewProps = {
    forRole: Role;
    links: LinksType;
};
export const PageWrapperView: FC<PageWrapperViewProps> = memo(
    ({ forRole, links }) => {
        useAuthCheck(forRole);

        return (
            <Styled.MainWrapper>
                <Sidebar links={links} />
                <Styled.ContentWrapper>
                    <Outlet />
                </Styled.ContentWrapper>
            </Styled.MainWrapper>
        );
    }
);
