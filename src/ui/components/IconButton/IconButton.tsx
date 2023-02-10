import { Icons, KeysOfIcons } from '@ui/assets/icons';
import { Styled } from '@ui/components/IconButton/styled';
import { FC } from 'react';

type IconButtonTypes = {
    iconName: (typeof Icons)[KeysOfIcons];
    onClick: VoidFunction;
    className?: string;
    size?: number;
};
export const IconButton: FC<IconButtonTypes> = ({
    iconName,
    onClick,
    className,
    size = 20,
}) => {
    return (
        <Styled.Container onClick={onClick} className={className}>
            <Styled.Icon src={iconName} alt={iconName} size={size} />
        </Styled.Container>
    );
};
