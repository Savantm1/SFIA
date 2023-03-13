import { Styled } from '@bless-components/PageWrapperView/styled';
import { Role } from '@common/models';
import { LinksType } from '@common/navigation/links';
import { FC, memo, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from './components/Sidebar';

type PageWrapperViewProps = {
    links: LinksType;
};
export const PageWrapperView: FC<PageWrapperViewProps> = memo(({ links }) => {
    const [role, setRole] = useState(Role.EMPLOYER);
    return (
        <Styled.MainWrapper>
            <Sidebar links={links} />
            <Styled.ContentWrapper>
                <Outlet />
            </Styled.ContentWrapper>
        </Styled.MainWrapper>
    );
});
