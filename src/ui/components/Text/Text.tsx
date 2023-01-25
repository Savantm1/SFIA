import { FC, memo } from 'react';
import { Typography as TypographyUI} from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { Variant } from '@mui/material/styles/createTypography';
import { TypographyPropsVariantOverrides } from '@mui/material/Typography/Typography';
import * as React from 'react';
import Color, { KeysOfColor } from '@ui/assets/color';

type TextProps = {
  align: 'center' | 'inherit' | 'justify' | 'left' | 'right',
  children?: React.ReactNode,
  variant: OverridableStringUnion<Variant | 'inherit', TypographyPropsVariantOverrides>,
  color?: typeof Color[KeysOfColor];
}

export const Text: FC<TextProps> = memo(({align,variant,children, color = Color.mainBlack}) => {

  return(
    <TypographyUI
      variant={variant}
      align={align}
      color={color}
    >
      {children}
    </TypographyUI>
  )
});