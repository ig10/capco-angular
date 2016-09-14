import {IStorage} from './services/storage';

export interface IUser {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  birthDate: Date;
}

export class User implements IUser {
  constructor(
    public firstName?: string,
    public lastName?: string,
    public gender?: string,
    public email?: string,
    public birthDate?: Date
  ) { }
}

class UserController {
  public static $inject = ['storage'];

  constructor(
    private storage: IStorage,
    private user: User
  ) {
    this.user = this.storage.get();
  }
}

export const user: angular.IComponentOptions = {
  template: require('./user.html'),
  controller: UserController
};
