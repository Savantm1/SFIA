import { User } from '@common/models';
import { create } from 'zustand';

interface AuthState {
    currentUser: User | undefined;
    setCurrentUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
    currentUser: undefined,
    setCurrentUser: (user: User) => {
        set({ currentUser: user });
    },
}));
