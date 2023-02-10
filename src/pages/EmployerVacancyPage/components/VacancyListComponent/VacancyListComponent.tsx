import { CreateVacancyModal } from '@pages/EmployerVacancyPage/components/CreateVacancyModal/CreateVacancyModal';
import { NoVacancyComponent } from '@pages/EmployerVacancyPage/components/NoVacancyComponent/NoVacancyComponent';
import { Icons } from '@ui/assets/icons';
import { IconButton } from '@ui/components/IconButton/IconButton';
import React, { FC, memo, useCallback, useState } from 'react';

import { Styled } from './styled';

type VacancyListComponentProps = {
    vacancyList: JSX.Element[];
};

export const VacancyListComponent: FC<VacancyListComponentProps> = memo(
    ({ vacancyList }) => {
        const [isModalOpen, setIsModalOpen] = useState(false);

        const openModalHandler = useCallback(() => {
            setIsModalOpen(true);
        }, []);

        const closeModalHandler = useCallback(() => {
            setIsModalOpen(false);
        }, []);

        return (
            <>
                <CreateVacancyModal
                    isOpen={isModalOpen}
                    onCloseHandler={closeModalHandler}
                />
                <Styled.Wrapper>
                    <Styled.HeaderWrapper>
                        <Styled.Title>Мои вакансии</Styled.Title>
                        <IconButton
                            iconName={Icons.add}
                            onClick={openModalHandler}
                        />
                    </Styled.HeaderWrapper>

                    {!vacancyList.length ? (
                        <NoVacancyComponent
                            createVacancyHandler={openModalHandler}
                        />
                    ) : (
                        <Styled.VacancyListWrapper>
                            {vacancyList}
                        </Styled.VacancyListWrapper>
                    )}
                </Styled.Wrapper>
            </>
        );
    }
);
