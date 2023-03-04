import Color from '@ui/assets/color';

export type ProgressBarProps = {
    title: string;
    subtitle: string;
    value: number;
    color: Color;
} & {
    isBig?: boolean;
};

export type ProgressBarListProps = {
    items: ProgressBarProps[];
    isBig?: boolean;
    className?: string;
};
