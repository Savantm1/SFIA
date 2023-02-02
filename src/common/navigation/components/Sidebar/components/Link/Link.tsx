import { FC, memo } from 'react';

import { Styled } from './styled';
type LinkProps = {
    icon?: any;
    text: string;
    to: string;
};
export const Link: FC<LinkProps> = memo(({ icon, text, to }) => {
    return (
        <Styled.LinkUI to={to}>
            {icon}
            {text}
        </Styled.LinkUI>
    );
});
