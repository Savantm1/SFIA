import { RoleRow } from '@scenarios/RolesBlockSc/components/RoleRow/RoleRow';
import { Icons } from '@ui/assets/icons';
import { IconButton } from '@ui/components/IconButton/IconButton';
import { FC, memo, useState } from 'react';

import { Styled } from './styled';

type RolesBlockScProps = {
    skillTypes: any;
    roles: number[];
    showAllItemsHandler: (value: 'roles' | 'skills' | '') => void;
};
export const RolesBlockSc: FC<RolesBlockScProps> = memo(
    ({ skillTypes, roles, showAllItemsHandler }) => {
        const [showAllRoles, setShowAllRoles] = useState(false);

        const elements = roles.map((el) => {
            return <RoleRow key={el} skillTypes={skillTypes} />;
        });
        if (roles.length === 0) {
            return (
                <Styled.Container>
                    <Styled.SkillsBar>
                        <Styled.Title align={'left'} variant={'h2'}>
                            Мои Роли
                        </Styled.Title>
                        <IconButton iconName={Icons.add} onClick={() => {}} />
                    </Styled.SkillsBar>
                    {elements}
                </Styled.Container>
            );
        }

        if (roles.length > 2) {
            const cutElements = elements.slice(0, 2);
            return (
                <Styled.Container>
                    <Styled.SkillsBar>
                        {showAllRoles && (
                            <Styled.BackButton
                                onClick={() => {
                                    setShowAllRoles(false);
                                    showAllItemsHandler('');
                                }}
                            />
                        )}
                        <Styled.Title align={'left'} variant={'h2'}>
                            Мои Роли
                        </Styled.Title>
                        <IconButton iconName={Icons.add} onClick={() => {}} />
                    </Styled.SkillsBar>
                    {showAllRoles ? elements : cutElements}
                    {!showAllRoles && (
                        <Styled.ShowAllBtn
                            onClick={() => {
                                setShowAllRoles(true);
                                showAllItemsHandler('roles');
                            }}
                        >
                            Смотреть все
                        </Styled.ShowAllBtn>
                    )}{' '}
                </Styled.Container>
            );
        } else {
            return (
                <Styled.Container>
                    <Styled.SkillsBar>
                        {showAllRoles && (
                            <Styled.BackButton
                                onClick={() => setShowAllRoles(false)}
                            />
                        )}
                        <Styled.Title align={'left'} variant={'h2'}>
                            Мои Роли
                        </Styled.Title>
                        <IconButton iconName={Icons.add} onClick={() => {}} />
                    </Styled.SkillsBar>
                    {elements}
                </Styled.Container>
            );
        }
    }
);
