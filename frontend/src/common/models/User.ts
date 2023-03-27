import { Role, SkillType } from '@common/models';
import { StudentSkillType } from '@store/skillsModal';

export type User = {
    id: string;
    role: Role;
    fullName: string;
    position: string;
    nameOrganization: string;
    about: string;
    companyDescription: string;
    nameSite: string;
    phone: string;
    mail: string;
    city: string;
    skillTypes: SkillType[];
    skills?: StudentSkillType[];
};
