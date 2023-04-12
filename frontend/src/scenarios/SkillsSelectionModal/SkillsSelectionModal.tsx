import { faker } from '@faker-js/faker';
import { ModalContainer } from '@scenarios/SkillsSelectionModal/components/ModalContainer/ModalContainer';
import { StudentSkillType, useSkillsModalStore } from '@store/skillsModal';
import { useSkillsModalForRolesStore } from '@store/skillsModalForRoles';
import { FC, memo, useEffect, useState } from 'react';

type SkillsSelectionModalProps = {
    open: boolean;
    handleClose: VoidFunction;
    getDataHandler: (selectedData: StudentSkillType[]) => any;
    updatedModalData?: StudentSkillType[];
    forRoles?: boolean;
};
export const SkillsSelectionModal: FC<SkillsSelectionModalProps> = memo(
    ({
        open,
        handleClose,
        getDataHandler,
        updatedModalData,
        forRoles = false,
    }) => {
        const setInitialData = useSkillsModalStore(
            (state) => state.setInitialData
        );
        const setInitialDataForRoles = useSkillsModalForRolesStore(
            (state) => state.setInitialData
        );
        const [key, setKey] = useState(faker.datatype.uuid());

        useEffect(() => {
            if (forRoles) {
                setInitialDataForRoles(updatedModalData);
            } else {
                setInitialData(updatedModalData);
            }
            setKey(faker.datatype.uuid());
        }, [
            forRoles,
            setInitialData,
            setInitialDataForRoles,
            updatedModalData,
        ]);
        return (
            <ModalContainer
                forRoles={forRoles}
                key={key}
                getDataHandler={getDataHandler}
                open={open}
                handleClose={handleClose}
            />
        );
    }
);
