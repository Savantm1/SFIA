import { User } from '@common/models';

export const canCreateNewPerson = (users: User[], newUser: User) => {
    return !users.find((user) => {
        return user.phone === newUser.phone;
    });
};
