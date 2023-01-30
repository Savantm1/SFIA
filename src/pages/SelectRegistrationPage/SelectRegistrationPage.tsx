import { AuthPageView } from '@bless-components/AuthPageView';
import { MAIN_ROUTES } from '@common/navigation';
import { Roles } from '@pages/SelectRegistrationPage/constants';
import Color from '@ui/assets/color';
import { Text } from '@ui/components/Text';
import React, { FC, memo } from 'react';

import { Styled } from './styled';

export const SelectRegistrationPage: FC = memo(() => {
    return (
        <AuthPageView>
            <>
                <Styled.ContentWrapper>
                    <Text variant={'h1'} align={'left'}>
                        Добро пожаловать!
                    </Text>
                    <Styled.Subtitle variant={'h3'} align={'left'}>
                        Выберите Вашу роль
                    </Styled.Subtitle>
                    <Styled.Item role={Roles.student} />
                    <Styled.Item role={Roles.employer} />
                    <Text
                        variant={'h4'}
                        align={'left'}
                        color={Color.secondaryDarkGray}
                    >
                        У Вас уже есть аккаунт?{' '}
                        <Styled.Link to={MAIN_ROUTES.login}>Вход</Styled.Link>
                    </Text>
                </Styled.ContentWrapper>
            </>
        </AuthPageView>
    );
});
