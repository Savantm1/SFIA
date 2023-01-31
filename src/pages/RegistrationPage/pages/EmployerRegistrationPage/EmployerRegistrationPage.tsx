import { AuthPageView } from '@bless-components/AuthPageView';
import { useValidation } from '@common/validation/hooks/useValidation';
import { SubtitleComponent } from '@pages/RegistrationPage/components/SubtitleComponent/SubtitleComponent';
import { TitleComponent } from '@pages/RegistrationPage/components/TitleComponent/TitleComponent';
import { inputValidationOptions } from '@pages/RegistrationPage/pages/EmployerRegistrationPage/constants';
import { Button } from '@ui/components/Button';
import React, { FC, memo } from 'react';

import { Styled } from '../../styled';

export const EmployerRegistrationPage: FC = memo(() => {
    const onSubmit = (data: any) => {
        alert(`Employer register success. Data: ${JSON.stringify(data)}`);
    };

    const { handleSubmit, getInputProps } = useValidation({
        ...inputValidationOptions,
        onSubmit,
    });

    return (
        <AuthPageView>
            <Styled.ContentWrapper>
                <TitleComponent />

                <SubtitleComponent number={'1'} text={'Компания'} />
                <Styled.Row>
                    <Styled.TextInput {...getInputProps('company')} />
                    <Styled.TextInput {...getInputProps('phone')} />
                </Styled.Row>
                <Styled.Row>
                    <Styled.TextInput {...getInputProps('email')} />
                    <Styled.TextInput {...getInputProps('site')} />
                </Styled.Row>
                <Styled.TextArea {...getInputProps('description')} />

                <Button onClick={handleSubmit} value={'Зарегистрироваться'} />
            </Styled.ContentWrapper>
        </AuthPageView>
    );
});
