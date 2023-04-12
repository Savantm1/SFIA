import { useMenu } from '@pages/EmployerVacancyProfilePage/hooks/useMenu';
import { DetailPopup } from '@scenarios/ProgressBarList/components/DetailPopup/DetailPopup';
import { Styled } from '@scenarios/ProgressBarList/styled';
import { ProgressBarProps } from '@scenarios/ProgressBarList/types';
import Color from '@ui/assets/color';
import { FC, memo, useMemo } from 'react';

export const ProgressBar: FC<ProgressBarProps> = memo(
    ({ value, title, subtitle, color, isBig, isEdit, onDelete, onChange }) => {
        const { anchorEl, isMenuOpen, anchorClickHandler, closeMenuHandler } =
            useMenu();
        //вроде у тебя такое же преобразование должно быть, если что убери тогда
        const currentValue = useMemo(
            () => (value > 7 ? value : Math.floor((value * 100) / 7)),
            [value]
        );
        return (
            <Styled.Wrapper>
                {isEdit && <Styled.DeleteBtn onClick={() => onDelete?.()} />}
                <Styled.ProgressBarOverlay
                    aria-controls={isMenuOpen ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={isMenuOpen ? 'true' : undefined}
                    id="basic-button"
                    onClick={anchorClickHandler as VoidFunction}
                />
                <Styled.ProgressBar
                    thickness={5}
                    variant="determinate"
                    value={currentValue}
                    customColor={isEdit ? Color.secondaryGray : color}
                    isBig={isBig}
                />
                {isEdit && (
                    <DetailPopup
                        onChange={onChange!}
                        abbr={title}
                        color={color}
                        title={title}
                        anchorEl={anchorEl}
                        isMenuOpen={isMenuOpen}
                        closeMenuHandler={closeMenuHandler}
                    />
                )}

                <Styled.LabelWrapper>
                    <Styled.Title
                        color={isEdit ? Color.secondaryGray : color}
                        isBig={isBig}
                    >
                        {title}
                    </Styled.Title>
                    <Styled.Subtitle isBig={isBig}>{subtitle}</Styled.Subtitle>
                </Styled.LabelWrapper>
            </Styled.Wrapper>
        );
    }
);
