import { MAIN_ROUTES } from '@common/navigation';
import Color from '@ui/assets/color';
import { Text } from '@ui/components/Text';
import React, { FC, memo, useState } from 'react';

import { Styled } from './styled';

export const LoginPage: FC = memo(() => {
    const [phone, setPhone] = useState('');
    //TODO: добавить валидацию и маску
    const phoneValidationHandler = (inputValue: string) => {
        console.log(inputValue);
        setPhone(inputValue);
    };

    const sendPhone = () => {
        alert(`send phone: ${phone}`);
    };
    return (
        <Styled.PageWrapper>
            <Styled.LeftSide>
                <Styled.Title>Платформа развития цифровых навыков</Styled.Title>
            </Styled.LeftSide>
            <Styled.RightSide>
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
                    <Styled.TextInput
                        type={'tel'}
                        value={phone}
                        pattern={
                            '(s*)?(+)?([- _():=+]?d[- _():=+]?){10,14}(s*)?'
                        }
                        onChange={phoneValidationHandler}
                        placeholder={'Номер телефона'}
                    />
                    <Styled.Button onClick={sendPhone} value={'Далее'} />
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
            </Styled.RightSide>
        </Styled.PageWrapper>
    );
});
