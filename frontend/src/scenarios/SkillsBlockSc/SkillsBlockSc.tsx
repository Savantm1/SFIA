import { SkillRow } from '@scenarios/SkillsBlockSc/components/SkillRow/SkillRow';
import { SkillsSelectionModal } from '@scenarios/SkillsSelectionModal';
import { StudentSkillType } from '@store/skillsModal';
import { Icons } from '@ui/assets/icons';
import EmptyImage from '@ui/assets/images/undraw_job_offers_re_634p 1.png';
import { Button } from '@ui/components/Button';
import { IconButton } from '@ui/components/IconButton/IconButton';
import { FC, memo, useCallback, useState } from 'react';

import { Styled } from './styled';

type SkillsBlockScProps = {
    items?: StudentSkillType[];
    showAllItemsHandler: (value: 'roles' | 'skills' | '') => void;
    getSkillsDataHandler: (skillsData: StudentSkillType[]) => Promise<void>;
};
export const SkillsBlockSc: FC<SkillsBlockScProps> = memo(
    ({ items = [], showAllItemsHandler, getSkillsDataHandler }) => {
        const [showAllSkills, setShowAllSkills] = useState(false);
        const [isOpenSkillsModal, setIsOpenSkillsModal] = useState(false);
        const onCloseSkillsModal = useCallback(() => {
            setIsOpenSkillsModal(false);
        }, [setIsOpenSkillsModal]);

        const onOpenSkillsModal = useCallback(() => {
            setIsOpenSkillsModal(true);
        }, [setIsOpenSkillsModal]);

        const elements = items.map((skill) => {
            return (
                <SkillRow
                    skillId={skill.skillId}
                    key={skill.skillId}
                    title={skill.text}
                    value={skill.value!}
                    color={skill.color}
                    min={skill.min}
                    max={skill.max}
                />
            );
        });
        if (items?.length === 0 || !items) {
            return (
                <Styled.Container>
                    <Styled.SkillsBar>
                        <Styled.SkillsTitle align={'left'} variant={'h2'}>
                            Мои навыки
                        </Styled.SkillsTitle>
                        <IconButton
                            iconName={Icons.add}
                            onClick={onOpenSkillsModal}
                        />
                    </Styled.SkillsBar>
                    <Styled.EmptySkillsBlock>
                        <img src={EmptyImage} alt={'empty skills img'} />
                        <Styled.Description>
                            Внесите навыки и роли, чтобы повысить ваш уровень!
                        </Styled.Description>
                        <Button
                            onClick={onOpenSkillsModal}
                            value={'Заполните навыки'}
                        />
                        <SkillsSelectionModal
                            updatedModalData={items}
                            getDataHandler={(data) =>
                                getSkillsDataHandler(data)
                            }
                            open={isOpenSkillsModal}
                            handleClose={onCloseSkillsModal}
                        />
                    </Styled.EmptySkillsBlock>
                </Styled.Container>
            );
        }
        if (items.length > 4) {
            const cutElements = elements.slice(0, 4);
            return (
                <Styled.Container>
                    <Styled.SkillsBar>
                        {showAllSkills && (
                            <Styled.BackButton
                                onClick={() => {
                                    setShowAllSkills(false);
                                    showAllItemsHandler('');
                                }}
                            />
                        )}
                        <Styled.SkillsTitle align={'left'} variant={'h2'}>
                            Мои навыки
                        </Styled.SkillsTitle>
                        <IconButton
                            iconName={Icons.add}
                            onClick={onOpenSkillsModal}
                        />
                    </Styled.SkillsBar>
                    {showAllSkills ? elements : cutElements}
                    {!showAllSkills && (
                        <Styled.ShowAllBtn
                            onClick={() => {
                                setShowAllSkills(true);
                                showAllItemsHandler('skills');
                            }}
                        >
                            Смотреть все
                        </Styled.ShowAllBtn>
                    )}
                    <SkillsSelectionModal
                        updatedModalData={items}
                        getDataHandler={(data) => getSkillsDataHandler(data)}
                        open={isOpenSkillsModal}
                        handleClose={onCloseSkillsModal}
                    />
                </Styled.Container>
            );
        } else {
            return (
                <Styled.Container>
                    <Styled.SkillsBar>
                        {showAllSkills && (
                            <Styled.BackButton
                                onClick={() => setShowAllSkills(false)}
                            />
                        )}
                        <Styled.SkillsTitle align={'left'} variant={'h2'}>
                            Мои навыки
                        </Styled.SkillsTitle>
                        <IconButton
                            iconName={Icons.add}
                            onClick={onOpenSkillsModal}
                        />
                    </Styled.SkillsBar>
                    {elements}
                    <SkillsSelectionModal
                        updatedModalData={items}
                        getDataHandler={(data) => getSkillsDataHandler(data)}
                        open={isOpenSkillsModal}
                        handleClose={onCloseSkillsModal}
                    />
                </Styled.Container>
            );
        }
    }
);
