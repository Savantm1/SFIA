import Fade from '@mui/material/Fade';
import { Box } from '@mui/system';
import { Icons } from '@ui/assets/icons';
import * as React from 'react';
import { FC, memo } from 'react';

import { style, Styled } from './styled';

// пример использования
//     const [open, setOpen] = useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);
// <Button onClick={handleOpen}>Open modal</Button>
// <Modal
//     onClose={handleClose}
//     isOpen={open}
//     children={<div> HELLO </div>}
// />

type ModalProps = {
    onClose: VoidFunction;
    isOpen: boolean;
    children: React.ReactElement;
};

export const Modal: FC<ModalProps> = memo(({ onClose, isOpen, children }) => {
    return (
        <div>
            <Styled.ModalUI
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={isOpen}
                onClose={onClose}
                closeAfterTransition
                slots={{ backdrop: Styled.Backdrop }}
            >
                <Fade in={isOpen} timeout={300}>
                    <Box sx={style}>
                        <Styled.ContentContainer>
                            <Styled.CloseButtonBlock>
                                <Styled.Close
                                    iconName={Icons.close}
                                    onClick={onClose}
                                />
                            </Styled.CloseButtonBlock>
                            {children}
                        </Styled.ContentContainer>
                    </Box>
                </Fade>
            </Styled.ModalUI>
        </div>
    );
});
