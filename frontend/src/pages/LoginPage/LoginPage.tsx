import { AuthPageView } from '@bless-components/AuthPageView';
import { MAIN_ROUTES } from '@common/navigation';
import { RequestStatus } from '@common/types/status';
import { useValidation } from '@common/validation/hooks/useValidation';
import { inputValidationOptions } from '@pages/LoginPage/constants';
import { useLogin } from '@pages/LoginPage/hooks/useLogin';
import Color from '@ui/assets/color';
import { Text } from '@ui/components/Text';
import { FC, memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Styled } from './styled';

export const LoginPage: FC = memo(() => {
    const navigate = useNavigate();

    const { tryLoginHandler, status, errorMessage } = useLogin();

    const onSubmit = (data: any) => {
        tryLoginHandler(data.phone);
    };

    useEffect(() => {
        if (status === RequestStatus.SUCCESS) {
            navigate('/student/main');
        }
    });

    const { handleSubmit, getInputProps } = useValidation({
        ...inputValidationOptions,
        onSubmit,
    });

    const buttonText =
        status === RequestStatus.LOADING
            ? 'Логинимся...'
            : 'Зарегистрироваться';

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
                <Styled.Button onClick={handleSubmit} value={buttonText} />
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

                {!!errorMessage.length && (
                    <Text variant={'h4'} align={'left'} color={Color.lightRed}>
                        {errorMessage}
                    </Text>
                )}
            </Styled.ContentWrapper>
        </AuthPageView>
    );
});
