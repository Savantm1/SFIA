import { Styled } from '@bless-components/PageWrapperView/styled';
import { Role } from '@common/models';
import { EMPLOYER_LINKS } from '@common/navigation/links';
import React, { FC, memo, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from './components/Sidebar';

export const PageWrapperView: FC = memo(() => {
    const [role, setRole] = useState(Role.EMPLOYER);
    return (
        <Styled.MainWrapper>
            <Sidebar links={EMPLOYER_LINKS} />
            <Styled.ContentWrapper>
                <Outlet />
            </Styled.ContentWrapper>
        </Styled.MainWrapper>
    );
});
