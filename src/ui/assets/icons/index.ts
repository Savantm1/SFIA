import close from './akar-icons_cross.svg';
import settingIcon from './ant-design_setting-outlined.svg';
import menuIcon from './carbon_overflow-menu-horizontal.svg';
import cock from './cock.svg';
import eye from './eye.svg';
import peopleIcon from './fluent_people-16-regular.svg';
import workIcon from './Group 429.svg';
import addIcon from './ic_round-plus.svg';
import backIcon from './material-symbols_arrow-back-ios-new-rounded.svg';
import backBlackIcon from './material-symbols_arrow-back-ios-new-rounded_black.svg';
import dashBordIcon from './material-symbols_dashboard-customize-outline-rounded.svg';
import featuresIcon from './material-symbols_featured-play-list-outline.svg';
import logoutIcon from './mi_log-out.svg';

export const Icons = {
    add: addIcon,
    menu: menuIcon,
    back: backIcon,
    backBlack: backBlackIcon,
    eye: eye,
    dashBord: dashBordIcon,
    features: featuresIcon,
    people: peopleIcon,
    work: workIcon,
    settings: settingIcon,
    logout: logoutIcon,
    close: close,
    cock: cock,
};

export type KeysOfIcons = keyof typeof Icons;
