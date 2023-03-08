import Color from '@ui/assets/color';

export const getMatchColor = (match: number): Color => {
    let color = Color.green;

    switch (true) {
        case match < 50:
            color = Color.lightRed;
            break;
        case match >= 50 && match < 70:
            color = Color.orange;
            break;
        default:
    }

    return color;
};
