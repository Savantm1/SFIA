import { Typography as TypographyUI } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { TypographyPropsVariantOverrides } from '@mui/material/Typography/Typography';
import { OverridableStringUnion } from '@mui/types';
import Color from '@ui/assets/color';
import { Styled } from '@ui/components/Text/styled';
import { FC, memo } from 'react';
import * as React from 'react';

type TextProps = {
    align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
    children?: React.ReactNode;
    variant: OverridableStringUnion<
        Variant | 'inherit',
        TypographyPropsVariantOverrides
    >;
    color?: string;
    className?: string;
};

export const Text: FC<TextProps> = memo(
    ({
        className,
        align = 'center',
        variant,
        children,
        color = Color.mainBlack,
    }) => {
        return className ? (
            <Styled.Wrapper className={className}>
                <TypographyUI variant={variant} align={align} color={color}>
                    {children}
                </TypographyUI>
            </Styled.Wrapper>
        ) : (
            <TypographyUI variant={variant} align={align} color={color}>
                {children}
            </TypographyUI>
        );
    }
);
