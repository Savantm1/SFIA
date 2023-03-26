import { Role, SkillType } from '@common/models';

export type User = {
    id: string;
    role: Role;
    fullName: string;
    secondName: string;
    firstName: string;
    studentPatronymic: string;
    position: string;
    nameOrganization: string;
    about: string;
    experience: string;
    education: string;
    companyDescription: string;
    nameSite: string;
    phone: string;
    mail: string;
    city: string;
    skillTypes: SkillType[];
};
