import { Role } from '@common/models';

export type User = {
    id: number;
    role: Role;
    fullname: string;
    position: string;
    phone: string;
    email: string;
    city: string;
};
