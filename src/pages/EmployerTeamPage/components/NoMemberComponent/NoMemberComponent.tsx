import image from '@ui/assets/images/no_member_image.png';
import { FC, memo } from 'react';

import { Styled } from './styled';

type NoMemberComponentProps = {
    createMemberHandler: VoidFunction;
};

export const NoMemberComponent: FC<NoMemberComponentProps> = memo(
    ({ createMemberHandler }) => {
        return (
            <Styled.Wrapper>
                <Styled.Image src={image} />
                <Styled.Title>Здесь будет показана ваша команда</Styled.Title>
                <Styled.Button
                    value={'Создать сотрудника'}
                    onClick={createMemberHandler}
                />
            </Styled.Wrapper>
        );
    }
);
