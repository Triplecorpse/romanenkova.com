import {User} from "../../models/user";
import {Database} from "../../../_interface/IMongooseSchema";

export function createUser(user: Database.IUser): Promise<any> {
  return User.create(user);
}

export function readUser(): Promise<any> {
  return User.find().then();
}

export function updateUserById(_id: string, user: Database.IUser): Promise<any> {
  return User.findByIdAndUpdate(_id, user).then();
}

export function deleteUser(_id: string): Promise<any> {
  return User.findByIdAndDelete(_id).then();
}
