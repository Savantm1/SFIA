import { SelectItemProps } from '@pages/SelectRegistrationPage/types';
import Color from '@ui/assets/color';
import rightIcon from '@ui/assets/icons/Vector.png';
import { Avatar } from '@ui/components/Avatar';
import { Text } from '@ui/components/Text';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import { Styled } from './styled';

export const SelectItem: FC<SelectItemProps> = memo(
    ({ roleItem, className }) => {
        const { role, link, title, subtitle } = roleItem;
        return (
            <Link to={link}>
                <Styled.SelectContainer className={className}>
                    <Avatar role={role} size={'lg'} />
                    <Styled.TextBlock>
                        <Text variant={'h4'}> {title}</Text>
                        <Styled.SubTitle
                            variant={'h6'}
                            align={'left'}
                            color={Color.secondaryDarkGray}
                        >
                            {subtitle}
                        </Styled.SubTitle>
                    </Styled.TextBlock>
                    <img src={rightIcon} alt={'right_arrow'} />
                </Styled.SelectContainer>
            </Link>
        );
    }
);
