import { faker } from '@faker-js/faker';
import { ProgressBarList } from '@scenarios/ProgressBarList';
import { useMemberRolesModalStore } from '@store/memberRolesModal';
import { useMembersStore } from '@store/members';
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
        const addRole = useMemberRolesModalStore((state) => state.addRole);
        const currentMember = useMembersStore((state) => state.currentMember);

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
                                addRole(currentMember!, {
                                    id: faker.datatype.number({
                                        min: 100,
                                        max: 90000000,
                                    }),
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
