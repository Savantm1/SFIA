import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Color from '@ui/assets/color';
import { FC, memo } from 'react';

type LoaderProps = {
    isVisible?: boolean;
};
export const Loader: FC<LoaderProps> = memo(({ isVisible = false }) => {
    return (
        <Backdrop
            sx={{
                color: Color.secondaryBlue,
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            open={isVisible}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
});
