import { AuthPageView } from '@bless-components/AuthPageView';
import { MAIN_ROUTES } from '@common/navigation';
import { SELECT_ROLES_CONFIG } from '@pages/SelectRegistrationPage/constants';
import Color from '@ui/assets/color';
import { Text } from '@ui/components/Text';
import React, { FC, memo, useMemo } from 'react';

import { Styled } from './styled';

export const SelectRegistrationPage: FC = memo(() => {
    const selectItems = useMemo(() => {
        return SELECT_ROLES_CONFIG.map((selectRole) => {
            return <Styled.Item key={selectRole.role} roleItem={selectRole} />;
        });
    }, []);

    return (
        <AuthPageView>
            <Styled.ContentWrapper>
                <Text variant={'h1'} align={'left'}>
                    Добро пожаловать!
                </Text>
                <Styled.Subtitle variant={'h3'} align={'left'}>
                    Выберите Вашу роль
                </Styled.Subtitle>

                {selectItems}

                <Text
                    variant={'h4'}
                    align={'left'}
                    color={Color.secondaryDarkGray}
                >
                    У Вас уже есть аккаунт?{' '}
                    <Styled.Link to={MAIN_ROUTES.login}>Вход</Styled.Link>
                </Text>
            </Styled.ContentWrapper>
        </AuthPageView>
    );
});
