import {IUser, User} from "../../models/user";

export function createNewUser(userToAdd: IUser): Promise<IUser> {
    return getUsers()
        .then((users: Array<IUser>) => {
            const userExists = users.find((user: IUser): boolean => user.nickName === userToAdd.nickName);
            if (userExists) {
                throw new Error('User already exists');
            }
            return User.create(userToAdd);
        })
        .then((newUser: any): IUser => ({
            canAddArticles: newUser.canAddArticles,
            canAddServices: newUser.canAddServices,
            canApproveReviews: newUser.canApproveReviews,
            canCreateUsers: newUser.canCreateUsers,
            canEditArticles: newUser.canEditArticles,
            canEditContacts: newUser.canEditContacts,
            canEditServices: newUser.canEditServices,
            canEditUsers: newUser.canEditUsers,
            email: newUser.email,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            nickName: newUser.nickName,
            password: newUser.password
        }));
}

export function getUsers(opts?: IUser): Promise<Array<IUser>> {
    return User.find(opts)
        .then((users: Array<any>): Array<IUser> => {
            return users.map((user: IUser): IUser => ({
                canAddArticles: user.canAddArticles,
                canAddServices: user.canAddServices,
                canApproveReviews: user.canApproveReviews,
                canCreateUsers: user.canCreateUsers,
                canEditArticles: user.canEditArticles,
                canEditContacts: user.canEditContacts,
                canEditServices: user.canEditServices,
                canEditUsers: user.canEditUsers,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                nickName: user.nickName,
                password: user.password
            }))

        });
}

export function getUser(nickName: string): Promise<IUser> {
    return User.findOne({nickName})
        .then((user: any): IUser => ({
            canAddArticles: user.canAddArticles,
            canAddServices: user.canAddServices,
            canApproveReviews: user.canApproveReviews,
            canCreateUsers: user.canCreateUsers,
            canEditArticles: user.canEditArticles,
            canEditContacts: user.canEditContacts,
            canEditServices: user.canEditServices,
            canEditUsers: user.canEditUsers,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            nickName: user.nickName
        }));
}

export function updateUser(nickName: string, newUser: IUser): Promise<any> {
    delete newUser.nickName;
    return User.updateOne({nickName}, newUser)
        .then((result: any) => result)
        .catch((err: any) => {
            throw new Error(err.message || 'Error in updateUser method');
        });
}

export function deleteUser(nickName: string): Promise<boolean> {
    return User.deleteOne({nickName})
        .then((result: boolean) => result);
}

export function checkUser(nickName: string, passwordStr: string): Promise<IUser> {
    return User.findOne({nickName: nickName, password: passwordStr})
        .then((user: any) => {
            if (user) {
                return {
                    canAddArticles: user.canAddArticles,
                    canAddServices: user.canAddServices,
                    canApproveReviews: user.canApproveReviews,
                    canCreateUsers: user.canCreateUsers,
                    canEditArticles: user.canEditArticles,
                    canEditContacts: user.canEditContacts,
                    canEditServices: user.canEditServices,
                    canEditUsers: user.canEditUsers,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    nickName: user.nickName
                };
            }

            throw new Error('User doesn\'t exist');
        })
        .catch((err: any) => {
            throw new Error(err.message || 'Error in checkUser method');
        });
}