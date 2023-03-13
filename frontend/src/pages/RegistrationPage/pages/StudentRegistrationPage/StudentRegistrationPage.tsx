import { AuthPageView } from '@bless-components/AuthPageView';
import { Role } from '@common/models';
import { RequestStatus } from '@common/types/status';
import { useValidation } from '@common/validation/hooks/useValidation';
import { SubtitleComponent } from '@pages/RegistrationPage/components/SubtitleComponent/SubtitleComponent';
import { TitleComponent } from '@pages/RegistrationPage/components/TitleComponent/TitleComponent';
import { useRegistration } from '@pages/RegistrationPage/hooks/useRegistration';
import { inputValidationOptions } from '@pages/RegistrationPage/pages/StudentRegistrationPage/constants';
import { Button } from '@ui/components/Button';
import { FC, memo } from 'react';

import { Styled } from '../../styled';

export const StudentRegistrationPage: FC = memo(() => {
    const { onSubmit, status } = useRegistration(Role.STUDENT);

    const { handleSubmit, getInputProps } = useValidation({
        ...inputValidationOptions,
        onSubmit,
    });

    return (
        <AuthPageView>
            <Styled.ContentWrapper>
                <TitleComponent />

                <SubtitleComponent number={'1'} text={'ФИО'} />
                <Styled.Row>
                    <Styled.TextInput {...getInputProps('secondName')} />
                    <Styled.TextInput {...getInputProps('firstName')} />
                </Styled.Row>
                <Styled.Row>
                    <Styled.TextInput {...getInputProps('studentPatronymic')} />
                    <Styled.TextInput {...getInputProps('birthday')} />
                </Styled.Row>

                <SubtitleComponent number={'2'} text={'Личная информация'} />
                <Styled.Row>
                    <Styled.TextInput {...getInputProps('phone')} />
                    <Styled.TextInput {...getInputProps('mail')} />
                </Styled.Row>
                <Styled.Row>
                    <Styled.TextInput {...getInputProps('education')} />
                </Styled.Row>
                <Styled.TextArea {...getInputProps('studentDescription')} />

                <Button
                    onClick={handleSubmit}
                    value={
                        status === RequestStatus.LOADING
                            ? 'Подождите...'
                            : 'Зарегистрироваться'
                    }
                />
            </Styled.ContentWrapper>
        </AuthPageView>
    );
});
