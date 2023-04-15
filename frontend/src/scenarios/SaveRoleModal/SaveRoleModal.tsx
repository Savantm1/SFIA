import { useCurrentUser } from '@common/hooks/useCurrentUser';
import { faker } from '@faker-js/faker';
import { ProgressBarList } from '@scenarios/ProgressBarList';
import { useRolesModalStore } from '@store/rolesModal';
import { StudentSkillType } from '@store/skillsModal';
import Color from '@ui/assets/color';
import { Button } from '@ui/components/Button';
import { Modal } from '@ui/components/Modal';
import { TextInput } from '@ui/components/TextInput';
import { FC, memo, useState } from 'react';

import { Styled } from './styled';

type SaveRoleModalProps = {
    open: boolean;
    handleClose: VoidFunction;
    // getNewRole: (newRole: StudentRoleType) => void;
    skills?: StudentSkillType[];
};
export const SaveRoleModal: FC<SaveRoleModalProps> = memo(
    ({ open, handleClose, skills = [] }) => {
        const [value, setValue] = useState('');
        const addRole = useRolesModalStore((state) => state.addRole);
        const user = useCurrentUser();

        return (
            <Modal
                onClose={() => {
                    handleClose();
                }}
                isOpen={open}
                needCloseButton={false}
            >
                <Styled.Container>
                    <Styled.Title variant={'h3'} align={'left'}>
                        Роль:
                    </Styled.Title>
                    <TextInput
                        onChange={setValue}
                        value={value}
                        placeholder={'Введите название роли'}
                    />
                    <Styled.Description
                        variant={'body1'}
                        color={Color.secondaryGray}
                        align={'left'}
                    >
                        Набор навыков, которые входят в эту роль
                    </Styled.Description>
                    <ProgressBarList items={skills} />
                    <Styled.ButtonsContainer>
                        <Button
                            onClick={async () => {
                                await addRole(user!, {
                                    id: +faker.datatype.uuid(),
                                    value: value,
                                    text: value,
                                    canEdit: true,
                                    skills: skills,
                                });
                                handleClose();
                            }}
                            value={'Сохранить'}
                            variant={'outlined'}
                        />
                        <Styled.CancelButton onClick={handleClose}>
                            {'Отмена'}
                        </Styled.CancelButton>
                    </Styled.ButtonsContainer>
                </Styled.Container>
            </Modal>
        );
    }
);
