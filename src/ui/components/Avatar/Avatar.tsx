import { Styled } from '@ui/components/Avatar/styled';
import { getIcon } from '@ui/components/Avatar/utils/getIcon';
import { getSize } from '@ui/components/Avatar/utils/getSize';
import { FC, memo } from 'react';

export type AvatarProps = {
    role: 'student' | 'employer';
    size: 'sm' | 'md' | 'lg';
};
export const Avatar: FC<AvatarProps> = memo(
    ({ size = 'md', role = 'student' }) => {
        const sizes = getSize(size);
        const icon = getIcon(role);
        return (
            <Styled.Wrapper sizes={sizes}>
                <Styled.Image src={icon} alt="avatar" />
            </Styled.Wrapper>
        );
    }
);
