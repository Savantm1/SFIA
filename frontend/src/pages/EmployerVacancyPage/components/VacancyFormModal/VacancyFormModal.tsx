import { Vacancy } from '@common/models';
import { useValidation } from '@common/validation/hooks/useValidation';
import { inputValidationOptions } from '@pages/EmployerVacancyPage/constants';
import { getValidationOptionsWithInitialValue } from '@pages/EmployerVacancyPage/utils/getValidationOptionsWithInitialValue';
import { StudentSkillType } from '@store/skillsModal';
import { Icons } from '@ui/assets/icons';
import { Modal } from '@ui/components/Modal';
import { FC, memo, useMemo } from 'react';

import { Styled } from './styled';

type VacancyFormModalProps = {
    isOpen: boolean;
    onCloseHandler: VoidFunction;
    openSkillModalHandler: VoidFunction;
    onFormSubmitHandler: (data: any) => void;
    vacancy?: Vacancy;
    selectedSkillTypes?: StudentSkillType[];
};

export const VacancyFormModal: FC<VacancyFormModalProps> = memo(
    ({
        isOpen,
        onCloseHandler,
        openSkillModalHandler,
        onFormSubmitHandler,
        vacancy,
        selectedSkillTypes = [],
    }) => {
        const onSubmit = (data: any) => {
            onFormSubmitHandler(data);
            onCloseHandler();
        };

        const formValidationOptions = useMemo(() => {
            return vacancy
                ? getValidationOptionsWithInitialValue(vacancy)
                : inputValidationOptions;
        }, [vacancy]);

        const { handleSubmit, getInputProps } = useValidation({
            ...formValidationOptions,
            onSubmit,
        });

        const title = vacancy ? 'Редактирование вакансии' : 'Создать вакансию';
        const buttonText = vacancy ? 'Сохранить' : 'Опубликовать';

        return (
            <Modal
                isOpen={isOpen}
                onClose={onCloseHandler}
                needCloseButton={false}
            >
                <Styled.Wrapper>
                    <Styled.Title>{title}</Styled.Title>
                    <Styled.Subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Styled.Subtitle>

                    <Styled.FormWrapper>
                        <Styled.Row>
                            <Styled.TextInput {...getInputProps('title')} />
                            <Styled.TextInput
                                {...getInputProps('experience')}
                            />
                        </Styled.Row>

                        <Styled.Row>
                            <Styled.TextInput
                                {...getInputProps('employment')}
                            />
                            <Styled.TextInput {...getInputProps('schedule')} />
                        </Styled.Row>

                        <Styled.Row>
                            <Styled.TextArea
                                {...getInputProps('responsibilities')}
                            />
                            <Styled.TextArea
                                {...getInputProps('requirements')}
                            />
                        </Styled.Row>

                        <Styled.Row>
                            <Styled.TextArea {...getInputProps('conditions')} />
                            <Styled.TextArea
                                {...getInputProps('description')}
                            />
                        </Styled.Row>

                        <Styled.Row>
                            <Styled.TextInput {...getInputProps('salary')} />

                            <>
                                {selectedSkillTypes.length === 0 ? (
                                    <Styled.AddSkillsButton
                                        onClick={openSkillModalHandler}
                                    >
                                        Выбрать навыки
                                    </Styled.AddSkillsButton>
                                ) : (
                                    <>
                                        <Styled.ProgressBar
                                            items={
                                                vacancy
                                                    ? selectedSkillTypes.length >
                                                      0
                                                        ? selectedSkillTypes
                                                        : vacancy.skillTypes
                                                    : selectedSkillTypes
                                            }
                                        />
                                        <Styled.DickButton
                                            iconName={Icons.cock}
                                            onClick={openSkillModalHandler}
                                        />
                                    </>
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
