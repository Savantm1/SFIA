import { FC, memo } from 'react';
import { useMatch } from 'react-router-dom';

import { Styled } from './styled';
type LinkProps = {
    icon?: any;
    text: string;
    to: string;
};
export const Link: FC<LinkProps> = memo(({ icon, text, to }) => {
    const match = useMatch(to);
    return (
        <Styled.LinkUI to={to} match={match}>
            {icon}
            {text}
        </Styled.LinkUI>
    );
});
