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
            const response = await fetch(
                `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/users`
            );
            const users = (await response.json()) as User[];
            set({ users });
        },
    }))
);
