import { Role } from '@common/models';
import student from '@ui/assets/icons/material-symbols_school.svg';
import employer from '@ui/assets/icons/ri_briefcase-3-line.svg';

export const getIcon = (role: Role): string => {
    return role === Role.STUDENT ? student : employer;
};
