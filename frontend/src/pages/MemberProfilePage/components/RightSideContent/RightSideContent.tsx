import { Role, User } from '@common/models';
import { Member } from '@common/models/Member';
import { RolesBlockSc } from '@pages/MemberProfilePage/components/RolesBlockSc/RolesBlockSc';
import { SkillsBlockSc } from '@scenarios/SkillsBlockSc/SkillsBlockSc';
import { StudentSkillType, useSkillsModalStore } from '@store/skillsModal';
import Color from '@ui/assets/color';
import { Avatar } from '@ui/components/Avatar';
import { Text } from '@ui/components/Text';
import { FC, memo, useCallback, useState } from 'react';

import { Styled } from './styled';

type RightSideContentProps = {
    user: User;
    member: Member;
};

export const RightSideContent: FC<RightSideContentProps> = memo(
    ({ user, member }) => {
        const updateMemberSkillsInDB = useSkillsModalStore(
            (state) => state.updateMemberSkillsInDB
        );
        const [showAllItems, setShowAllItems] = useState<
            'roles' | '' | 'skills'
        >('');

        const showAllItemsHandler = useCallback(
            (value: 'roles' | 'skills' | '') => {
                setShowAllItems(value);
            },
            []
        );
        const getSkillsDataHandler = async (skillsData: StudentSkillType[]) => {
            await updateMemberSkillsInDB(member, skillsData);
            member.skills = skillsData;
        };

        return (
            <Styled.Container>
                <Styled.StudentBar>
                    <Styled.TextBlock>
                        <Text variant={'h4'} align={'right'}>
                            {user.nameOrganization}
                        </Text>
                        <Text
                            variant={'body2'}
                            align={'right'}
                            color={Color.secondaryGray}
                        >
                            {user.phone}
                        </Text>
                    </Styled.TextBlock>
                    <Avatar role={Role.EMPLOYER} size={'md'} />
                </Styled.StudentBar>
                <Styled.ScrollContainer>
                    {(showAllItems === 'skills' || showAllItems === '') && (
                        <SkillsBlockSc
                            items={member.skills}
                            showAllItemsHandler={showAllItemsHandler}
                            getSkillsDataHandler={getSkillsDataHandler}
                            title={`Мои навык`}
                            isMember={true}
                        />
                    )}
                    {(showAllItems === 'roles' || showAllItems === '') && (
                        <RolesBlockSc
                            member={member}
                            showAllItemsHandler={showAllItemsHandler}
                        />
                    )}
                </Styled.ScrollContainer>
            </Styled.Container>
        );
    }
);
