import { User } from '@common/models';
import { useAuthStore } from '@store/auth';
import { StudentSkillType } from '@store/skillsModal';
import ky from 'ky';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export type StudentRoleType = {
    id: number;
    value: string;
    text: string;
    canEdit?: boolean;
    skills: StudentSkillType[];
};

type RolesModalStoreType = {
    studentRoles: StudentRoleType[];
    getRoles: () => void;
    addRole: (user: User, role: StudentRoleType) => void;
    deleteRole: (user: User, roleId: number) => void;
    editRole: (user: User, roleId: number, skills: StudentSkillType[]) => void;
};

export const useRolesModalStore = create<RolesModalStoreType>()(
    immer((set) => ({
        studentRoles: [],
        getRoles: async () => {
            const response: StudentRoleType[] = await ky
                .get(
                    'http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/roles'
                )
                .json();
            set({ studentRoles: response });
        },
        addRole: async (user: User, newRole: StudentRoleType) => {
            const updatedStudentRoles = user.studentRoles || [];
            updatedStudentRoles.push(newRole);
            await ky.put(
                `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/users/${user.id}`,
                {
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
                }
            );
            useAuthStore
                .getState()
                .setCurrentUser({ ...user, studentRoles: updatedStudentRoles });
        },

        deleteRole: async (user: User, roleId: number) => {
            const filteredRoles = user.studentRoles?.filter(
                (role) => role.id !== roleId
            );
            await ky.put(
                `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/users/${user.id}`,
                {
                    json: {
                        id: user.id,
                        role: user.role,
                        fullName: user.fullName,
                        phone: user.phone,
                        mail: user.mail,
                        city: user.city,
                        skills: user.skills,
                        studentRoles: filteredRoles,
                    },
                }
            );
            useAuthStore
                .getState()
                .setCurrentUser({ ...user, studentRoles: filteredRoles });
        },

        editRole: async (user: User, roleId, skills) => {
            const updatedRoles = user.studentRoles?.map((userRole) => {
                if (userRole.id === roleId) {
                    userRole.skills = skills;
                    return userRole;
                }
                return userRole;
            });
            await ky.put(
                `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/users/${user.id}`,
                {
                    json: {
                        id: user.id,
                        role: user.role,
                        fullName: user.fullName,
                        phone: user.phone,
                        mail: user.mail,
                        city: user.city,
                        skills: user.skills,
                        studentRoles: updatedRoles,
                    },
                }
            );
            useAuthStore
                .getState()
                .setCurrentUser({ ...user, studentRoles: updatedRoles });
        },
    }))
);
