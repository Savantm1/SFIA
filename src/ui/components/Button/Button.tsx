import { Styled } from './styled';
import { FC, memo } from 'react';

type ButtonProps = {
    value?: string | number;
    variant?: 'outlined' | 'text' | 'contained';
    disabled?: boolean;
    href?: string;
    onClick: VoidFunction;
    size?: 'small' | 'medium' | 'large';
    // leftIcon?: string;
    // rightIcon?: string;
    fullWidth?: boolean;
};
export const Button: FC<ButtonProps> = memo(
    ({
        value = '',
        variant = 'outlined',
        disabled,
        href,
        onClick,
        size = 'medium',
        // leftIcon,
        // rightIcon
    }) => {
        return (
            <Styled.Button
                variant={variant}
                disabled={disabled}
                href={href}
                onClick={onClick}
                size={size}
                // rightIcon={rightIcon}
                // leftIcon={leftIcon}
            >
                {value}
            </Styled.Button>
        );
    }
);
