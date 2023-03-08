import { AuthPageView } from '@bless-components/AuthPageView';
import { useValidation } from '@common/validation/hooks/useValidation';
import { SubtitleComponent } from '@pages/RegistrationPage/components/SubtitleComponent/SubtitleComponent';
import { TitleComponent } from '@pages/RegistrationPage/components/TitleComponent/TitleComponent';
import { inputValidationOptions } from '@pages/RegistrationPage/pages/StudentRegistrationPage/constants';
import { Button } from '@ui/components/Button';
import React, { FC, memo } from 'react';

import { Styled } from '../../styled';

export const StudentRegistrationPage: FC = memo(() => {
    const onSubmit = (data: any) => {
        alert(`Student register success. Data: ${JSON.stringify(data)}`);
    };

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
                    <Styled.TextInput {...getInputProps('secondname')} />
                    <Styled.TextInput {...getInputProps('firstname')} />
                </Styled.Row>
                <Styled.Row>
                    <Styled.TextInput {...getInputProps('thirdname')} />
                    <Styled.TextInput {...getInputProps('birthday')} />
                </Styled.Row>

                <SubtitleComponent number={'2'} text={'Личная информация'} />
                <Styled.Row>
                    <Styled.TextInput {...getInputProps('phone')} />
                    <Styled.TextInput {...getInputProps('email')} />
                </Styled.Row>
                <Styled.Row>
                    <Styled.TextInput {...getInputProps('education')} />
                </Styled.Row>
                <Styled.TextArea {...getInputProps('about')} />

                <Button onClick={handleSubmit} value={'Зарегистрироваться'} />
            </Styled.ContentWrapper>
        </AuthPageView>
    );
});
