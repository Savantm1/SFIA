export type RoleItem = {
    role: 'student' | 'employer';
    link: string;
    title: string;
    subtitle: string;
};

export type SelectItemProps = { roleItem: RoleItem; className?: string };
