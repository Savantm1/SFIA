import { Role, User } from '@common/models';
import { RolesBlockSc } from '@scenarios/RolesBlockSc/RolesBlockSc';
import { SkillsBlockSc } from '@scenarios/SkillsBlockSc/SkillsBlockSc';
import { StudentSkillType, useSkillsModalStore } from '@store/skillsModal';
import Color from '@ui/assets/color';
import { Avatar } from '@ui/components/Avatar';
import { Text } from '@ui/components/Text';
import { FC, memo, useCallback, useState } from 'react';

import { Styled } from './styled';

type RightSideContentProps = {
    user: User;
};

export const RightSideContent: FC<RightSideContentProps> = memo(({ user }) => {
    const updateStudentSkillsInDB = useSkillsModalStore(
        (state) => state.updateStudentSkillsInDB
    );
    const [showAllItems, setShowAllItems] = useState<'roles' | '' | 'skills'>(
        ''
    );

    const showAllItemsHandler = useCallback(
        (value: 'roles' | 'skills' | '') => {
            setShowAllItems(value);
        },
        []
    );
    const getSkillsDataHandler = async (skillsData: StudentSkillType[]) => {
        await updateStudentSkillsInDB(user, skillsData);
        user.skills = skillsData;
    };

    return (
        <Styled.Container>
            <Styled.StudentBar>
                <Styled.TextBlock>
                    <Text variant={'h4'} align={'right'}>
                        {user.fullName}
                    </Text>
                    <Text
                        variant={'body2'}
                        align={'right'}
                        color={Color.secondaryGray}
                    >
                        {user.phone}
                    </Text>
                </Styled.TextBlock>
                <Avatar role={Role.STUDENT} size={'md'} />
            </Styled.StudentBar>
            <Styled.ScrollContainer>
                {(showAllItems === 'skills' || showAllItems === '') && (
                    <SkillsBlockSc
                        items={user.skills}
                        showAllItemsHandler={showAllItemsHandler}
                        getSkillsDataHandler={getSkillsDataHandler}
                    />
                )}
                {(showAllItems === 'roles' || showAllItems === '') && (
                    <RolesBlockSc
                        roles={user.studentRoles}
                        showAllItemsHandler={showAllItemsHandler}
                    />
                )}
            </Styled.ScrollContainer>
        </Styled.Container>
    );
});
