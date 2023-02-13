import { FC, memo } from 'react';

import { Styled } from './styled';

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
    className?: string;
};
export const Button: FC<ButtonProps> = memo(
    ({
        value = '',
        variant = 'outlined',
        disabled,
        href,
        onClick,
        size = 'medium',
        className,
        // leftIcon,
        // rightIcon
    }) => {
        return (
            <div>
                <Styled.Button
                    className={className}
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
            </div>
        );
    }
);
