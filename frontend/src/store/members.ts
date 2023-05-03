import { User } from '@common/models';
import { Member } from '@common/models/Member';
import ky from 'ky';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface MembersState {
    members: Member[];
    currentMember: Member | null;
    fetchMembers: (employerId: User['id']) => void;
    getMemberById: (id: Member['id']) => void;
    createMember: (data: Partial<Member>) => void;
    updateMember: (memberId: Member['id'], data: Partial<Member>) => void;
    deleteMember: (memberId: Member['id']) => void;
    setCurrentMember: (member: Member | null) => void;
}

export const useMembersStore = create<MembersState>()(
    immer((set) => ({
        members: [],
        currentMember: null,
        fetchMembers: async (employerId) => {
            const response = await fetch(
                `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/members?employerId=${employerId}`
            );
            const members = (await response.json()) as Member[];

            set({ members });
        },
        getMemberById: async (id) => {
            const response = await fetch(
                `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/members?id=${id}`
            );
            const member = (await response.json())[0] as Member;
            set({ currentMember: member });
        },
        createMember: async (data) => {
            await ky.post(
                `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/members`,
                {
                    json: {
                        ...data,
                    },
                }
            );
        },
        updateMember: async (memberId, data) => {
            await ky.put(
                `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/members/${memberId}`,
                {
                    json: {
                        ...data,
                    },
                }
            );
        },
        deleteMember: async (memberId) => {
            await ky.delete(
                `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/members/${memberId}`
            );
        },
        setCurrentMember: (member: Member | null) => {
            set({ currentMember: member });
        },
    }))
);
