import { SkillType, User } from '@common/models';
import ky from 'ky';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type StudentRoleSkill = SkillType & {
    id: string;
};

export type StudentRoleType = {
    id: string;
    value: string;
    text: string;
    skills: StudentRoleSkill[];
};
type RolesModalStoreType = {
    studentRoles: StudentRoleType[];
    getRoles: () => void;
    addRole: (user: User, role: StudentRoleType) => void;
};

export const useRolesModalStore = create<RolesModalStoreType>()(
    immer((set) => ({
        studentRoles: [],
        getRoles: async () => {
            const response: StudentRoleType[] = await ky
                .get('http://localhost:3001/roles')
                .json();
            set({ studentRoles: response });
        },
        addRole: async (user: User, newRole: StudentRoleType) => {
            const updatedStudentRoles = user.studentRoles || [];
            updatedStudentRoles.push(newRole);
            await ky.put(`http://localhost:3001/users/${user.id}`, {
                json: {
                    id: user.id,
                    role: user.role,
                    fullName: user.fullName,
                    phone: user.phone,
                    mail: user.mail,
                    city: user.city,
                    skills: user.skills,
                    studentRoles: updatedStudentRoles,
                },
            });
        },
    }))
);
