import { TextField as TextFieldMUI, TextFieldProps, styled, alpha } from '@mui/material';
import Color from '@ui/assets/color';

export const TextField = styled(TextFieldMUI)<TextFieldProps>(({ theme }) => ({
  backgroundColor: Color.secondaryLightBlue,
  borderRadius: 10,

  '& input': {
    fontSize: 16,
    paddingInline:16,
    paddingTop:12,
    paddingBottom:12,
    borderColor: Color.secondaryBlue,
  },

  '& .Mui-focused':{
    borderColor: Color.secondaryBlue,
  },
  '& .MuiFormLabel-root:focus': {
    fontSize: 16,
    top: -8,
  },
  '& legend' : {
    width: 0
  },
  '& textarea': {
    fontSize: 16,
    paddingInline:16,
    paddingTop:12,
    paddingBottom:12,
    borderColor: Color.secondaryBlue,
  },
  '& input:disabled': {
    backgroundColor: 'rgba(251, 251, 251, 1)',
  },
  '& input:valid + fieldset': {
    borderColor: Color.secondaryBlue,
    borderWidth: 2,
  },
  '& textarea:valid + fieldset': {
    borderColor: Color.secondaryBlue,
    borderWidth: 2,
  },
  '& .MuiFormControl-root': {
    borderRadius: 10,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: Color.secondaryBlue,
      borderRadius: 10,
    },
    '&:hover fieldset': {
      borderColor: Color.secondaryBlue,
    },
    '&:focus fieldset': {
      borderColor: Color.secondaryBlue,
    },

  },
  }));

export const Styled = {
  TextField,
}