import styled from 'styled-components';
import Color from '@ui/assets/color';
import { default as SelectUI } from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import { SelectOption } from '@ui/components/Select/types';

type OptionValueType = { value: SelectOption['value'] };

const Select = styled(SelectUI)<OptionValueType>`
    .MuiSelect-select {
        font-size: 12px !important;
        line-height: 14.52px !important;
        font-weight: 500 !important;
        background: ${Color.mainWhite} !important;
        font-family: 'inter', serif !important;
        color: ${({ value }) =>
            value.length ? Color.mainBlack : Color.secondaryGray} !important;
        border: 1.5px solid ${Color.secondaryGray} !important;
        border-radius: 10px !important;
        outline: none !important;
        padding: 11px 14px 9px 14px !important;
    }

    .MuiOutlinedInput-notchedOutline {
        border: none;
    }

    .MuiSelect-select[aria-expanded='true'] {
        color: ${Color.mainBlack} !important;
        background: ${Color.secondaryLightBlue} !important;
        border: 1.5px solid ${Color.secondaryBlue} !important;
    }
`;

const Option = styled(MenuItem)`
    padding: 7px 10px 8px 14px !important;
    font-style: normal !important;
    font-weight: 500 !important;
    font-size: 12px !important;
    line-height: 15px !important;

    &[aria-selected='true'] {
        background: ${Color.mainViolet} !important;
        color: ${Color.mainWhite} !important;
    }
`;

const PlaceholderOption = styled(Option)`
    color: ${Color.secondaryGray} !important;
`;

export const Styled = {
    Select,
    Option,
    PlaceholderOption,
};
