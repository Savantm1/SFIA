import { FC, memo } from 'react';
import { getIcon } from '@ui/components/Avatar/utils/getIcon';
import { getSize } from '@ui/components/Avatar/utils/getSize';
import student from './../../assets/icons/material-symbols_school.svg';
import { Styled } from '@ui/components/Avatar/styled';

export type AvatarProps = {
    role: 'student' | 'employer';
    size: 'sm' | 'md' | 'lg';
};
export const Avatar: FC<AvatarProps> = memo(({ size = 'md', role }) => {
    const sizes = getSize(size);
    const icon = getIcon(role);
    return (
        <Styled.Wrapper sizes={sizes}>
            <Styled.Image src={icon} alt="avatar" />
        </Styled.Wrapper>
    );
});
