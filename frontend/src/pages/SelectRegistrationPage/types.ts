import { Role } from '@common/models';

export type RoleItem = {
    role: Role;
    link: string;
    title: string;
    subtitle: string;
};

export type SelectItemProps = { roleItem: RoleItem; className?: string };
