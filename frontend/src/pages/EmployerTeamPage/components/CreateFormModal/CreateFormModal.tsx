import { User } from '@common/models';
import { useValidation } from '@common/validation/hooks/useValidation';
import { inputValidationOptions } from '@pages/EmployerTeamPage/components/CreateFormModal/constants';
import { SubtitleComponent } from '@pages/RegistrationPage/components/SubtitleComponent/SubtitleComponent';
import { StudentSkillType } from '@store/skillsModal';
import { Icons } from '@ui/assets/icons';
import { Modal } from '@ui/components/Modal';
import { FC, memo } from 'react';

import { Styled } from './styled';

type CreateFormModalProps = {
    isOpen: boolean;
    onCloseHandler: VoidFunction;
    onFormSubmitHandler: (data: any) => void;
    openSkillModalHandler: VoidFunction;
    member?: User;
    selectedSkillTypes?: StudentSkillType[];
};

export const CreateFormModal: FC<CreateFormModalProps> = memo(
    ({
        isOpen,
        onCloseHandler,
        onFormSubmitHandler,
        openSkillModalHandler,
        member,
        selectedSkillTypes = [],
    }) => {
        const onSubmit = (data: any) => {
            onFormSubmitHandler(data);
            onCloseHandler();
        };

        const { handleSubmit, getInputProps } = useValidation({
            ...inputValidationOptions,
            onSubmit,
        });

        return (
            <Modal
                isOpen={isOpen}
                onClose={onCloseHandler}
                needCloseButton={false}
            >
                <Styled.Wrapper>
                    <Styled.Title>Создать сотрудника</Styled.Title>
                    <Styled.Subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Styled.Subtitle>

                    <Styled.FormWrapper>
                        <SubtitleComponent
                            number={'1'}
                            text={'Личная информация'}
                        />
                        <Styled.Row>
                            <Styled.TextInput
                                {...getInputProps('secondName')}
                            />
                            <Styled.TextInput {...getInputProps('firstName')} />
                        </Styled.Row>

                        <Styled.Row>
                            <Styled.TextInput
                                {...getInputProps('patronymic')}
                            />
                            <Styled.TextInput {...getInputProps('birthday')} />
                        </Styled.Row>

                        <Styled.Row>
                            <Styled.TextInput {...getInputProps('phone')} />
                            <Styled.TextInput {...getInputProps('email')} />
                        </Styled.Row>

                        <Styled.Row>
                            <Styled.TextInput {...getInputProps('education')} />
                        </Styled.Row>

                        <SubtitleComponent number={'2'} text={'Должность'} />

                        <Styled.Row>
                            <Styled.TextInput {...getInputProps('position')} />
                            <Styled.TextInput
                                {...getInputProps('experience')}
                            />
                        </Styled.Row>

                        <Styled.Row>
                            <>
                                {selectedSkillTypes.length === 0 ? (
                                    <Styled.AddSkillsButton
                                        onClick={openSkillModalHandler}
                                    >
                                        Выбрать навыки
                                    </Styled.AddSkillsButton>
                                ) : (
                                    <div
                                        style={{
                                            width: '286px',
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                        }}
                                    >
                                        <Styled.ProgressBar
                                            items={selectedSkillTypes}
                                        />
                                        <Styled.DickButton
                                            iconName={Icons.cock}
                                            onClick={openSkillModalHandler}
                                        />
                                    </div>
                                )}
                            </>
                        </Styled.Row>

                        <Styled.ButtonsWrapper>
                            <Styled.CreateButton onClick={handleSubmit}>
                                Сохранить
                            </Styled.CreateButton>
                            <Styled.CancelButton onClick={onCloseHandler}>
                                Отмена
                            </Styled.CancelButton>
                        </Styled.ButtonsWrapper>
                    </Styled.FormWrapper>
                </Styled.Wrapper>
            </Modal>
        );
    }
);
