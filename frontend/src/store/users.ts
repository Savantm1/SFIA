import { User } from '@common/models';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface UsersState {
    users: User[];
    fetchUsers: () => void;
}

export const useUsersStore = create<UsersState>()(
    immer((set) => ({
        users: [],
        fetchUsers: async () => {
            const response = await fetch(' http://localhost:3001/users');
            const users = (await response.json()) as User[];
            set({ users });
        },
    }))
);
