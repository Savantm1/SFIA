import { User } from '@common/models';
import { Avatar } from '@ui/components/Avatar';
import React, { FC, memo } from 'react';

import { Styled } from './styled';

type CompanyInfoComponentProps = {
    user: User;
};

export const CompanyInfoComponent: FC<CompanyInfoComponentProps> = memo(
    ({ user }) => {
        const { role, company, city, site, phone, email, about } = user;

        return (
            <Styled.Wrapper>
                <Styled.AvatarWrapper>
                    <Styled.InfoWrapper>
                        <Styled.InfoCompany>{company}</Styled.InfoCompany>
                        <Styled.InfoPhone>{phone}</Styled.InfoPhone>
                    </Styled.InfoWrapper>
                    <Avatar role={role} size={'md'} />
                </Styled.AvatarWrapper>

                <Styled.TitleCompany>{company}</Styled.TitleCompany>
                <Styled.City>{city}</Styled.City>
                <Styled.Link href={site}>{site}</Styled.Link>
                <Styled.Link href={'to:' + email}>{email}</Styled.Link>
                <Styled.Description>{about}</Styled.Description>
            </Styled.Wrapper>
        );
    }
);
