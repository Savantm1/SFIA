import { Member } from '@common/models/Member';
import { useMembersStore } from '@store/members';
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
    roles: StudentRoleType[];
    getRoles: () => void;
    addRole: (member: Member, role: StudentRoleType) => void;
    deleteRole: (member: Member, roleId: number) => void;
    editRole: (
        member: Member,
        roleId: number,
        skills: StudentSkillType[]
    ) => void;
};

export const useMemberRolesModalStore = create<RolesModalStoreType>()(
    immer((set) => ({
        roles: [],
        getRoles: async () => {
            const response: StudentRoleType[] = await ky
                .get(
                    `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/roles`
                )
                .json();
            set({ roles: response });
        },
        addRole: async (member: Member, newRole: StudentRoleType) => {
            const updatedMemberRoles = member.roles || [];
            updatedMemberRoles.push(newRole);
            await ky.put(
                `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/members/${member.id}`,
                {
                    json: {
                        ...member,
                        roles: updatedMemberRoles,
                    },
                }
            );
            useMembersStore
                .getState()
                .setCurrentMember({ ...member, roles: updatedMemberRoles });
        },

        deleteRole: async (member: Member, roleId: number) => {
            const filteredRoles = member.roles?.filter(
                (role) => role.id !== roleId
            );
            await ky.put(
                `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/members/${member.id}`,
                {
                    json: {
                        ...member,
                        roles: filteredRoles,
                    },
                }
            );
            useMembersStore
                .getState()
                .setCurrentMember({ ...member, roles: filteredRoles });
        },

        editRole: async (member: Member, roleId, skills) => {
            const updatedRoles = member.roles?.map((role) => {
                if (role.id === roleId) {
                    role.skills = skills;
                    return role;
                }
                return role;
            });
            await ky.put(
                `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/members/${member.id}`,
                {
                    json: {
                        ...member,
                        roles: updatedRoles,
                    },
                }
            );
            useMembersStore
                .getState()
                .setCurrentMember({ ...member, roles: updatedRoles });
        },
    }))
);
