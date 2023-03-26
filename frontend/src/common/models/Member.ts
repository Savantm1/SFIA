import { SkillType, User } from '@common/models';

export type Member = {
    id: string;
    employerId: User['id'];
    secondName: string;
    firstName: string;
    patronymic: string;
    position: string;
    experience: string;
    education: string;
    birthday: string;
    phone: string;
    email: string;
    skillTypes: SkillType[];
};
