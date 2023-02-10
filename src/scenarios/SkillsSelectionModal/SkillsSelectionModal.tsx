import { ModalContainer } from '@scenarios/SkillsSelectionModal/components/ModalContainer/ModalContainer';
import { Button } from '@ui/components/Button';
import { memo, useState } from 'react';
import * as React from 'react';

export const SkillsSelectionModal = memo(() => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //Временное решение, для того, чтобы можно было смотреть отдельно на экране
    return (
        <div>
            <Button onClick={handleOpen} size={'large'} value={'Open Modal'} />
            <ModalContainer open={open} handleClose={handleClose} />
        </div>
    );
});
