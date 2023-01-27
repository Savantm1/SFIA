import { Icons, KeysOfIcons } from '@ui/assets/icons';
import { Styled } from '@ui/components/IconButton/styled';
import { FC } from 'react';

type IconButtonTypes = {
    iconName: (typeof Icons)[KeysOfIcons];
    onClick: VoidFunction;
};
export const IconButton: FC<IconButtonTypes> = ({ iconName, onClick }) => {
    return (
        <Styled.Container onClick={onClick}>
            <Styled.Icon src={iconName} alt={iconName} />
        </Styled.Container>
    );
};
