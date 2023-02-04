import { Styled } from '@bless-components/PageWrapperView/styled';
import { EMPLOYER_LINKS } from '@common/navigation/links';
import { Roles } from '@pages/SelectRegistrationPage/constants';
import React, { FC, memo, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from './components/Sidebar';

export const PageWrapperView: FC = memo(() => {
    const [role, setRole] = useState(Roles.employer);
    return (
        <Styled.MainWrapper>
            <Sidebar links={EMPLOYER_LINKS} />
            <Styled.ContentWrapper>
                <Outlet />
            </Styled.ContentWrapper>
        </Styled.MainWrapper>
    );
});
