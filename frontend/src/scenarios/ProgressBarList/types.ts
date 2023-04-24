import { StudentSkillType } from '@store/skillsModal';

export type ProgressBarProps = StudentSkillType & {
    isBig?: boolean;
};

export type ProgressBarListProps = {
    carousel?: boolean;
    items: ProgressBarProps[];
    isBig?: boolean;
    className?: string;
    skillsGap?: number;
};
