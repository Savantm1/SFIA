import { faker } from '@faker-js/faker';
import { ModalContainer } from '@scenarios/SkillsSelectionModal/components/ModalContainer/ModalContainer';
import { StudentSkillType, useSkillsModalStore } from '@store/skillsModal';
import { FC, memo, useEffect, useState } from 'react';

type SkillsSelectionModalProps = {
    open: boolean;
    handleClose: VoidFunction;
    getDataHandler: (selectedData: StudentSkillType[]) => any;
    updatedModalData?: StudentSkillType[];
};
export const SkillsSelectionModal: FC<SkillsSelectionModalProps> = memo(
    ({ open, handleClose, getDataHandler, updatedModalData }) => {
        const setInitialData = useSkillsModalStore(
            (state) => state.setInitialData
        );
        const [key, setKey] = useState(faker.datatype.uuid());
        useEffect(() => {
            setInitialData(updatedModalData);
            setKey(faker.datatype.uuid());
        }, [setInitialData, updatedModalData]);

        return (
            <ModalContainer
                key={key}
                getDataHandler={getDataHandler}
                open={open}
                handleClose={handleClose}
            />
        );
    }
);
