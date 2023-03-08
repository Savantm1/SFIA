import { Role } from '@common/models';
import { Styled } from '@ui/components/Avatar/styled';
import { getIcon } from '@ui/components/Avatar/utils/getIcon';
import { getSize } from '@ui/components/Avatar/utils/getSize';
import { FC, memo } from 'react';

export type AvatarProps = {
    role: Role;
    size: 'sm' | 'md' | 'lg' | 'sobig';
};
export const Avatar: FC<AvatarProps> = memo(
    ({ size = 'md', role = Role.STUDENT }) => {
        const sizes = getSize(size);
        const icon = getIcon(role);
        return (
            <Styled.Wrapper sizes={sizes}>
                <Styled.Image src={icon} alt="avatar" />
            </Styled.Wrapper>
        );
    }
);
