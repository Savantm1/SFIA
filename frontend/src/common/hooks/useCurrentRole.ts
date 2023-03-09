import { Role } from '@common/models';
import { useAuthStore } from '@store/auth';

export const useCurrentRole = (): Role | undefined => {
    return useAuthStore((state) => state.currentUser)?.role;
};
