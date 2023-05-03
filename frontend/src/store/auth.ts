import { User } from '@common/models';
import ky from 'ky';
import { create } from 'zustand';

interface AuthState {
    currentUser: User | null;
    setCurrentUser: (user: User | null) => void;
    fetchCurrentUser: (userId: string) => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set) => ({
    currentUser: null,
    setCurrentUser: (user: User | null) => {
        set({ currentUser: user });
    },

    fetchCurrentUser: async (userId: string) => {
        const user = await ky(
            `http://${process.env.REACT_APP_HOST}:${process.env.REACT_APP_SERVER_PORT}/users/${userId}`
        ).json();
        set({ currentUser: user as User });
    },
}));
