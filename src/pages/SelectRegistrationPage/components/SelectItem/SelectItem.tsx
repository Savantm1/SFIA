import {
    Roles,
    RolesName,
    SELECT_REGISTRATION_PAGE_MAP,
} from '@pages/SelectRegistrationPage/constants';
import Color from '@ui/assets/color';
import rightIcon from '@ui/assets/icons/Vector.png';
import { Avatar } from '@ui/components/Avatar';
import { Text } from '@ui/components/Text';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { Styled } from './styled';

type SelectItemProps = {
    role: Roles;
    // isChecked: boolean;
    className?: string;
};
export const SelectItem: FC<SelectItemProps> = memo(({ className, role }) => {
    const titleRole =
        role === Roles.student ? RolesName.student : RolesName.employer;
    const subtitleRole =
        role === Roles.student
            ? SELECT_REGISTRATION_PAGE_MAP.subtitleStudent
            : SELECT_REGISTRATION_PAGE_MAP.subtitleEmployer;
    const link = Roles.student ? '' : '';

    return (
        <Link to={link}>
            <Styled.SelectContainer className={className}>
                <Avatar role={role} size={'lg'} />
                <Styled.TextBlock>
                    <Text variant={'h4'}> {titleRole}</Text>
                    <Styled.SubTitle
                        variant={'h6'}
                        align={'left'}
                        color={Color.secondaryDarkGray}
                    >
                        {subtitleRole}
                    </Styled.SubTitle>
                </Styled.TextBlock>
                <img src={rightIcon} alt={'right_arrow'} />
            </Styled.SelectContainer>
        </Link>
    );
});
