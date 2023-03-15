import { User } from '@common/models';
import { Avatar } from '@ui/components/Avatar';
import { FC, memo } from 'react';

import { Styled } from './styled';

type CompanyInfoComponentProps = {
    user: User;
};

export const CompanyInfoComponent: FC<CompanyInfoComponentProps> = memo(
    ({ user }) => {
        const {
            role,
            nameOrganization,
            city,
            nameSite,
            phone,
            mail,
            companyDescription,
        } = user;

        return (
            <Styled.Wrapper>
                <Styled.AvatarWrapper>
                    <Styled.InfoWrapper>
                        <Styled.InfoCompany>
                            {nameOrganization}
                        </Styled.InfoCompany>
                        <Styled.InfoPhone>{phone}</Styled.InfoPhone>
                    </Styled.InfoWrapper>
                    <Avatar role={role} size={'md'} />
                </Styled.AvatarWrapper>

                <Styled.TitleCompany>{nameOrganization}</Styled.TitleCompany>
                <Styled.City>{city}</Styled.City>
                <Styled.Link href={nameSite}>{nameSite}</Styled.Link>
                <Styled.Link href={'mailto:' + mail}>{mail}</Styled.Link>
                <Styled.Description>{companyDescription}</Styled.Description>
            </Styled.Wrapper>
        );
    }
);
