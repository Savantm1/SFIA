import { User } from '@common/models';
import { useValidation } from '@common/validation/hooks/useValidation';
import { inputValidationOptions } from '@pages/EmployerTeamPage/components/CreateFormModal/constants';
import { SubtitleComponent } from '@pages/RegistrationPage/components/SubtitleComponent/SubtitleComponent';
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
};

export const CreateFormModal: FC<CreateFormModalProps> = memo(
    ({
        isOpen,
        onCloseHandler,
        onFormSubmitHandler,
        openSkillModalHandler,
        member,
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
                                {...getInputProps('secondname')}
                            />
                            <Styled.TextInput {...getInputProps('firstname')} />
                        </Styled.Row>

                        <Styled.Row>
                            <Styled.TextInput {...getInputProps('thirdname')} />
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
                            <Styled.Select
                                options={[]}
                                onSelect={() => {}}
                                defaultValue={''}
                                placeholder={'Навык'}
                            />

                            <Styled.DickButton
                                iconName={Icons.cock}
                                onClick={openSkillModalHandler}
                            />
                        </Styled.Row>

                        <Styled.ButtonsWrapper>
                            <Styled.CreateButton
                                value={'Сохранить'}
                                onClick={handleSubmit}
                            />
                            <Styled.CancelButton
                                value={'Отмена'}
                                onClick={onCloseHandler}
                            />
                        </Styled.ButtonsWrapper>
                    </Styled.FormWrapper>
                </Styled.Wrapper>
            </Modal>
        );
    }
);
