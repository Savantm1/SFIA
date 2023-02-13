import image from '@ui/assets/images/no_vacancy_image.png';
import { FC, memo } from 'react';

import { Styled } from './styled';

type NoVacancyComponentProps = {
    createVacancyHandler: VoidFunction;
};

export const NoVacancyComponent: FC<NoVacancyComponentProps> = memo(
    ({ createVacancyHandler }) => {
        return (
            <Styled.Wrapper>
                <Styled.Image src={image} />
                <Styled.Title>
                    Здесь будут представлены вакансии, которые вы создадите
                </Styled.Title>
                <Styled.Button
                    value={'Создать вакансию'}
                    onClick={createVacancyHandler}
                />
            </Styled.Wrapper>
        );
    }
);
