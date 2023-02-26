import { Role, User } from '@common/models';
import {
    mockArray,
    SkillsBlockSc,
} from '@scenarios/SkillsBlockSc/SkillsBlockSc';
import Color from '@ui/assets/color';
import { Icons } from '@ui/assets/icons';
import { Avatar } from '@ui/components/Avatar';
import { IconButton } from '@ui/components/IconButton/IconButton';
import { Text } from '@ui/components/Text';
import React, { FC, memo } from 'react';

import { Styled } from './styled';

type RightSideContentProps = {
    user: User;
};

export const RightSideContent: FC<RightSideContentProps> = memo(({ user }) => {
    const { fullName, phone } = user;
    return (
        <Styled.Container>
            <Styled.StudentBar>
                <Styled.TextBlock>
                    <Text variant={'h4'} align={'right'}>
                        {fullName}
                    </Text>
                    <Text
                        variant={'body2'}
                        align={'right'}
                        color={Color.secondaryGray}
                    >
                        {phone}
                    </Text>
                </Styled.TextBlock>
                <Avatar role={Role.STUDENT} size={'md'} />
            </Styled.StudentBar>
            <Styled.ScrollContainer>
                <SkillsBlockSc items={mockArray} />
                <Styled.SkillsBar>
                    <Text align={'left'} variant={'h2'}>
                        Мои Роли
                    </Text>
                    <IconButton iconName={Icons.add} onClick={() => {}} />
                </Styled.SkillsBar>
            </Styled.ScrollContainer>
        </Styled.Container>
    );
});
