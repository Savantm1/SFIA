import Color from '@ui/assets/color';

export type SkillType = {
    id?: number;
    title: string;
    subtitle: string;
    value: number;
    color: Color | string;
};
