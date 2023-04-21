import { Member } from '@common/models/Member';
import { useValidation } from '@common/validation/hooks/useValidation';
import { inputValidationOptions } from '@pages/EmployerTeamPage/components/MemberFormModal/constants';
import { getValidationOptionsWithInitialValue } from '@pages/EmployerTeamPage/utils/getValidationOptionsWithInitialValue';
import { SubtitleComponent } from '@pages/RegistrationPage/components/SubtitleComponent/SubtitleComponent';
import { StudentSkillType } from '@store/skillsModal';
import { Icons } from '@ui/assets/icons';
import { Modal } from '@ui/components/Modal';
import { FC, memo, useMemo } from 'react';

import { Styled } from './styled';

type MemberFormModalProps = {
    isOpen: boolean;
    onCloseHandler: VoidFunction;
    onFormSubmitHandler: (data: any) => void;
    openSkillModalHandler: VoidFunction;
    member?: Member;
    selectedSkillTypes?: StudentSkillType[];
};

export const MemberFormModal: FC<MemberFormModalProps> = memo(
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

        const formValidationOptions = useMemo(() => {
            return member
                ? getValidationOptionsWithInitialValue(member)
                : inputValidationOptions;
        }, [member]);

        const { handleSubmit, getInputProps } = useValidation({
            ...formValidationOptions,
            onSubmit,
        });

        const title = member
            ? 'Редактирование сотрудника'
            : 'Создать сотрудника';
        const subtitle = member
            ? 'Внесите нужные изменения'
            : 'Заполните все поля';
        const buttonText = member ? 'Сохранить' : 'Добавить';

        return (
            <Modal
                isOpen={isOpen}
                onClose={onCloseHandler}
                needCloseButton={false}
            >
                <Styled.Wrapper>
                    <Styled.Title>{title}</Styled.Title>
                    <Styled.Subtitle>{subtitle}</Styled.Subtitle>

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
                            <Styled.TextInput {...getInputProps('city')} />
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
                                            items={
                                                member
                                                    ? selectedSkillTypes.length >
                                                      0
                                                        ? selectedSkillTypes
                                                        : member.skills ?? []
                                                    : selectedSkillTypes
                                            }
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
                                {buttonText}
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
