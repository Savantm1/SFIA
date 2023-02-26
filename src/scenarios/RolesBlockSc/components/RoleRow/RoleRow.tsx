import { ProgressBarProps } from '@scenarios/ProgressBarList';
import { Icons } from '@ui/assets/icons';
import { Text } from '@ui/components/Text';
import React, { FC, memo } from 'react';

import { Styled } from './styled';

type RoleRowProps = {
    skillTypes: ProgressBarProps[];
};
export const RoleRow: FC<RoleRowProps> = memo(({ skillTypes }) => {
    return (
        <Styled.Container>
            <Styled.Content>
                <Text align={'left'} variant={'h5'}>
                    Инженер
                </Text>
                <Styled.ProgressBarListWrapper items={skillTypes} />
            </Styled.Content>
            <Styled.EditButton iconName={Icons.menu} onClick={() => {}} />
        </Styled.Container>
    );
});
