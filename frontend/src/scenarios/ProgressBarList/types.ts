import { StudentSkillType } from '@store/skillsModal';

export type ProgressBarProps = StudentSkillType & {
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
    skillsGap?: number;
};
