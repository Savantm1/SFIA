import { useGoBack } from '@common/navigation/hooks/useGoBack';
import { Styled } from '@pages/RegistrationPage/styled';
import Color from '@ui/assets/color';
import { Icons } from '@ui/assets/icons';
import { FC, memo } from 'react';

export const TitleComponent: FC = memo(() => {
    const goBack = useGoBack();

    return (
        <Styled.MainTitleRow>
            <Styled.BackButton iconName={Icons.backBlack} onClick={goBack} />

            <Styled.MainTitle
                variant={'h1'}
                align={'left'}
                color={Color.mainBlack}
            >
                Персональные данные
            </Styled.MainTitle>
        </Styled.MainTitleRow>
    );
});
