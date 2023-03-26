import { SkillType, Vacancy } from '@common/models';
import { useValidation } from '@common/validation/hooks/useValidation';
import { inputValidationOptions } from '@pages/EmployerVacancyPage/constants';
import { getValidationOptionsWithInitialValue } from '@pages/EmployerVacancyPage/utils/getValidationOptionsWithInitialValue';
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
    selectedSkillTypes?: SkillType[];
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
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    height: '100%',
                                    width: '100%',
                                }}
                            >
                                <Styled.ProgressBar
                                    items={
                                        vacancy
                                            ? selectedSkillTypes.length > 0
                                                ? selectedSkillTypes
                                                : vacancy.skillTypes
                                            : selectedSkillTypes
                                    }
                                />
                                {/*{vacancy ? (*/}
                                {/*    <Styled.ProgressBar*/}
                                {/*        items={selectedSkillTypes}*/}
                                {/*    />*/}
                                {/*) : (*/}
                                {/*    <Styled.Select*/}
                                {/*        options={[]}*/}
                                {/*        onSelect={() => {}}*/}
                                {/*        defaultValue={''}*/}
                                {/*        placeholder={'Навык'}*/}
                                {/*    />*/}
                                {/*)}*/}

                                <Styled.DickButton
                                    iconName={Icons.cock}
                                    onClick={openSkillModalHandler}
                                />
                            </div>
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
