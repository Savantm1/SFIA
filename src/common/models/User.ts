import { Role } from '@common/models';

export type User = {
    id: string;
    role: Role;
    fullName: string;
    position: string;
    company: string;
    about: string;
    site: string;
    phone: string;
    email: string;
    city: string;
};
