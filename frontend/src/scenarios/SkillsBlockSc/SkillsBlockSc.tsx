import { faker } from '@faker-js/faker';
import {
    SkillRow,
    SkillRowProps,
} from '@scenarios/SkillsBlockSc/components/SkillRow/SkillRow';
import { SkillsSelectionModal } from '@scenarios/SkillsSelectionModal';
import Color from '@ui/assets/color';
import { Icons } from '@ui/assets/icons';
import EmptyImage from '@ui/assets/images/undraw_job_offers_re_634p 1.png';
import { Button } from '@ui/components/Button';
import { IconButton } from '@ui/components/IconButton/IconButton';
import React, { FC, memo, useCallback, useState } from 'react';

import { Styled } from './styled';
const mock = {
    title: faker.random.word(),
    color: Color.fuxy,
    value: faker.datatype.number({ min: 1, max: 7 }),
};

export const mockArray = [
    mock,
    mock,
    mock,
    mock,
    mock,
    mock,
    mock,
    mock,
    mock,
    mock,
    mock,
    mock,
    mock,
    mock,
    mock,
    mock,
    mock,
];

type SkillsBlockScProps = {
    items: SkillRowProps[];
    showAllItemsHandler: (value: 'roles' | 'skills' | '') => void;
};
export const SkillsBlockSc: FC<SkillsBlockScProps> = memo(
    ({ items, showAllItemsHandler }) => {
        const [showAllSkills, setShowAllSkills] = useState(false);

        const [isOpenSkillsModal, setIsOpenSkillsModal] = useState(false);
        const onCloseSkillsModal = useCallback(() => {
            setIsOpenSkillsModal(false);
        }, [setIsOpenSkillsModal]);

        const onOpenSkillsModal = useCallback(() => {
            setIsOpenSkillsModal(true);
        }, [setIsOpenSkillsModal]);

        //items
        const elements = mockArray.map((el) => {
            return (
                <SkillRow
                    key={el.title}
                    title={el.title}
                    value={el.value}
                    color={el.color}
                />
            );
        });
        if (items.length === 0) {
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
                        open={isOpenSkillsModal}
                        handleClose={onCloseSkillsModal}
                    />
                </Styled.Container>
            );
        }
    }
);
