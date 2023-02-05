import Color from '@ui/assets/color';

export type ProgressBarProps = {
    title: string;
    subtitle: string;
    value: number;
    color: Color;
};

export type ProgressBarListProps = {
    items: ProgressBarProps[];
    className?: string;
};
