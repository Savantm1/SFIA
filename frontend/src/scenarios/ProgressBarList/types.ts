import { SkillType } from '@common/models';

export type ProgressBarProps = SkillType & {
    isEdit?: boolean;
    onDelete?: VoidFunction;
    onChange?: (value: number) => void;
} & {
    isBig?: boolean;
};

export type ProgressBarListProps = {
    items: ProgressBarProps[];
    isBig?: boolean;
    className?: string;
    isEdit?: boolean;
    onDelete?: (value: ProgressBarProps) => void;
    onChange?: (id: number, value: number) => void;
};
