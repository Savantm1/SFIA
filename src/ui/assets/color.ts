enum Color {
    //main
    mainWhite = '#FFFFFF',
    mainBlack = '#000000',
    mainViolet = '#301C3A',
    //secondary
    secondaryDarkGray = '#656464',
    secondaryGray = '#9F9F9F',
    secondaryLightGray = '#F0F0F0',
    secondaryDirtyWhite = '#FBFBFB',
    secondaryBlue = '#5D6BEF',
    secondaryLightBlue = '#DBDEFF',
    //anotherColors
    brown = '#BF9501',
    deepBlue = '#0E72AB',
    orange = '#FC8616',
    lightBrown = '#FFF1C0',
    lightBlue = '#C8EBFF',
    lightOrange = '#FFE9D4',
    purple = '#7208A8',
    green = '#138D0A',
    fuxy = '#B4104C',
    lightPurple = '#EDCAFF',
    lightGreen = '#CEFFCA',
    lightFuxy = '#FFC0D7',
}

export type KeysOfColor = keyof typeof Color;

export default Color;
