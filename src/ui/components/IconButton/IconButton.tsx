import { Icons, KeysOfIcons } from '@ui/assets/icons';
import { Styled } from '@ui/components/IconButton/styled';
import { FC } from 'react';

type IconButtonTypes = {
    iconName: (typeof Icons)[KeysOfIcons];
    onClick: VoidFunction;
    className?: string;
};
export const IconButton: FC<IconButtonTypes> = ({
    iconName,
    onClick,
    className,
}) => {
    return (
        <Styled.Container onClick={onClick} className={className}>
            <Styled.Icon src={iconName} alt={iconName} />
        </Styled.Container>
    );
};
