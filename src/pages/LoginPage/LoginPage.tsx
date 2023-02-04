import { AuthPageView } from '@bless-components/AuthPageView';
import { MAIN_ROUTES } from '@common/navigation';
import { useValidation } from '@common/validation/hooks/useValidation';
import { inputValidationOptions } from '@pages/LoginPage/constants';
import Color from '@ui/assets/color';
import { Text } from '@ui/components/Text';
import React, { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Styled } from './styled';

export const LoginPage: FC = memo(() => {
    const navigate = useNavigate();
    const onSubmit = (phone: string) => {
        alert(`${JSON.stringify(phone)}`);
        navigate('/employer/main');
    };

    const { handleSubmit, getInputProps } = useValidation({
        ...inputValidationOptions,
        onSubmit,
    });

    return (
        <AuthPageView>
            <Styled.ContentWrapper>
                <Text variant={'h1'} align={'left'} color={Color.mainBlack}>
                    Добро пожаловать !
                </Text>
                <Styled.Subtitle
                    variant={'h4'}
                    align={'left'}
                    color={Color.secondaryGray}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum.
                </Styled.Subtitle>
                <Styled.TextInput {...getInputProps('phone')} />
                <Styled.Button onClick={handleSubmit} value={'Далее'} />
                <Text
                    variant={'h4'}
                    align={'left'}
                    color={Color.secondaryDarkGray}
                >
                    У вас нет аккаунта?{' '}
                    <Styled.Link to={MAIN_ROUTES.registration}>
                        Зарегистрироваться
                    </Styled.Link>
                </Text>
            </Styled.ContentWrapper>
        </AuthPageView>
    );
});
