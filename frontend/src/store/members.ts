import { User } from '@common/models';
import { Member } from '@common/models/Member';
import ky from 'ky';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface MembersState {
    members: Member[];
    fetchMembers: (employerId: User['id']) => void;
    createMember: (data: Partial<Member>) => void;
}

export const useMembersStore = create<MembersState>()(
    immer((set) => ({
        members: [],
        fetchMembers: async (employerId) => {
            const response = await fetch(
                `http://localhost:3001/members?employerId=${employerId}`
            );
            const members = (await response.json()) as Member[];

            set({ members });
        },
        createMember: async (data) => {
            await ky.post('http://localhost:3001/members', {
                json: {
                    ...data,
                },
            });
        },
    }))
);
