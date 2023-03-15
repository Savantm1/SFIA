import { User } from '@common/models';
import { useAuthStore } from '@store/auth';

export const useCurrentUser = (): User | null => {
    return useAuthStore((state) => state.currentUser);
};
