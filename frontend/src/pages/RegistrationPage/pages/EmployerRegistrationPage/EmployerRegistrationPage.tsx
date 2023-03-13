import { AuthPageView } from '@bless-components/AuthPageView';
import { Role } from '@common/models';
import { RequestStatus } from '@common/types/status';
import { useValidation } from '@common/validation/hooks/useValidation';
import { SubtitleComponent } from '@pages/RegistrationPage/components/SubtitleComponent/SubtitleComponent';
import { TitleComponent } from '@pages/RegistrationPage/components/TitleComponent/TitleComponent';
import { useRegistration } from '@pages/RegistrationPage/hooks/useRegistration';
import { inputValidationOptions } from '@pages/RegistrationPage/pages/EmployerRegistrationPage/constants';
import { Button } from '@ui/components/Button';
import { FC, memo } from 'react';

import { Styled } from '../../styled';

export const EmployerRegistrationPage: FC = memo(() => {
    const { onSubmit, status } = useRegistration(Role.EMPLOYER);

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
                    <Styled.TextInput {...getInputProps('nameOrganization')} />
                    <Styled.TextInput {...getInputProps('phone')} />
                </Styled.Row>
                <Styled.Row>
                    <Styled.TextInput {...getInputProps('mail')} />
                    <Styled.TextInput {...getInputProps('nameSite')} />
                </Styled.Row>
                <Styled.TextArea {...getInputProps('companyDescription')} />

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
