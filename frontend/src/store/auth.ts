import { User } from '@common/models';
import { create } from 'zustand';

interface AuthState {
    currentUser: User | null;
    setCurrentUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
    currentUser: null,
    setCurrentUser: (user: User | null) => {
        set({ currentUser: user });
    },
}));
