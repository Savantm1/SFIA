import { AvatarProps } from '@ui/components/Avatar/Avatar';

type GetSizeType = (size: AvatarProps['size']) => {
    width: number;
    height: number;
};

export const getSize: GetSizeType = (size) => {
    switch (size) {
        case 'sm':
            return { width: 30, height: 30 };
        case 'md':
            return { width: 40, height: 40 };
        case 'lg':
            return { width: 50, height: 50 };
        case 'sobig':
            return { width: 120, height: 120 };
        default:
            return { width: 40, height: 40 };
    }
};
