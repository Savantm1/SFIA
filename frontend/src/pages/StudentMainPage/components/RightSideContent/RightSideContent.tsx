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
    const { fullName, phone, skillTypes, skills } = user;
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
        setSkillsState(skillsData);
    };

    const [skillsState, setSkillsState] = useState(skills);

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
                {(showAllItems === 'skills' || showAllItems === '') && (
                    <SkillsBlockSc
                        items={skillsState}
                        showAllItemsHandler={showAllItemsHandler}
                        getSkillsDataHandler={getSkillsDataHandler}
                    />
                )}
                {(showAllItems === 'roles' || showAllItems === '') && (
                    <RolesBlockSc
                        roles={[1, 2, 3, 4, 5, 6]}
                        skillTypes={skillTypes}
                        showAllItemsHandler={showAllItemsHandler}
                    />
                )}
            </Styled.ScrollContainer>
        </Styled.Container>
    );
});
