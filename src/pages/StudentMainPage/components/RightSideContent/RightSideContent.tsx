import { Role, User } from '@common/models';
import { SkillsSelectionModal } from '@scenarios/SkillsSelectionModal';
import Color from '@ui/assets/color';
import { Icons } from '@ui/assets/icons';
import EmptyImage from '@ui/assets/images/undraw_job_offers_re_634p 1.png';
import { Avatar } from '@ui/components/Avatar';
import { Button } from '@ui/components/Button';
import { IconButton } from '@ui/components/IconButton/IconButton';
import { Text } from '@ui/components/Text';
import { FC, memo, useCallback, useState } from 'react';

import { Styled } from './styled';

type RightSideContentProps = {
    user: User;
};

export const RightSideContent: FC<RightSideContentProps> = memo(({ user }) => {
    const { fullName, phone } = user;
    const [isOpenSkillsModal, setIsOpenSkillsModal] = useState(false);
    const onCloseSkillsModal = useCallback(() => {
        setIsOpenSkillsModal(false);
    }, [setIsOpenSkillsModal]);

    const onOpenSkillsModal = useCallback(() => {
        setIsOpenSkillsModal(true);
    }, [setIsOpenSkillsModal]);
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
            <Styled.SkillsBar>
                <Text align={'left'} variant={'h2'}>
                    Мои навыки
                </Text>
                <IconButton iconName={Icons.add} onClick={() => {}} />
            </Styled.SkillsBar>
            <Styled.EmptySkillsBlock>
                <img src={EmptyImage} alt={'empty skills img'} />
                <Styled.Text>
                    Внесите навыки и роли, чтобы повысить ваш уровень!
                </Styled.Text>
                <Button
                    onClick={onOpenSkillsModal}
                    value={'Заполните навыки'}
                />
                <SkillsSelectionModal
                    open={isOpenSkillsModal}
                    handleClose={onCloseSkillsModal}
                />
            </Styled.EmptySkillsBlock>
            <Styled.SkillsBar>
                <Text align={'left'} variant={'h2'}>
                    Мои Роли
                </Text>
                <IconButton iconName={Icons.add} onClick={() => {}} />
            </Styled.SkillsBar>
        </Styled.Container>
    );
});
