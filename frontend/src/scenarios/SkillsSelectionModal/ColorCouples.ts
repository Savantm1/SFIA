import Color, { KeysOfColor } from '@ui/assets/color';

export const ColorCouples = [
    { main: Color.fuxy, secondary: Color.lightFuxy },
    { main: Color.brown, secondary: Color.lightBrown },
    { main: Color.orange, secondary: Color.lightOrange },
    { main: Color.blue, secondary: Color.lightBlue },
    { main: Color.green, secondary: Color.lightGreen },
    { main: Color.purple, secondary: Color.lightPurple },
];

export const getColorCouple = (color: (typeof Color)[KeysOfColor] | string) => {
    return ColorCouples.find((colorCouple) => {
        return colorCouple.main === color;
    });
};
