import { useValidation } from '@common/validation/hooks/useValidation';
import { inputValidationOptions } from '@pages/EmployerVacancyPage/constants';
import { Modal } from '@ui/components/Modal';
import React, { FC, memo } from 'react';

import { Styled } from './styled';

type CreateVacancyModalProps = {
    isOpen: boolean;
    onCloseHandler: VoidFunction;
};

export const CreateVacancyModal: FC<CreateVacancyModalProps> = memo(
    ({ isOpen, onCloseHandler }) => {
        const onSubmit = (data: any) => {
            alert(`Vacancy created success. Data: ${JSON.stringify(data)}`);
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
                    <Styled.Title>Создать вакансию</Styled.Title>
                    <Styled.Subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Styled.Subtitle>

                    <Styled.FormWrapper>
                        <Styled.Row>
                            <Styled.TextInput
                                {...getInputProps('vacancy_name')}
                            />
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
                            <Styled.Select
                                options={[]}
                                onSelect={() => {}}
                                defaultValue={''}
                                placeholder={'Навык'}
                            />
                        </Styled.Row>

                        <Styled.ButtonsWrapper>
                            <Styled.CreateButton
                                value={'Опубликовать'}
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
