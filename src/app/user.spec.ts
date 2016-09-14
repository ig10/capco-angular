/// <reference path="../../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-mocks';
import {User, user} from './user';

describe('User', () => {
  const app: string = 'capcoUser';
  beforeEach(() => {
    angular
      .module(app, ['app/user.html'])
      .component(app, user);
    angular.mock.module(app);
  });

  it('Empty User can be created', () => {
    let testUser: User = new User();
    expect(testUser).toBeDefined();
  });

  it('New User can be created', () => {
    let testUser: User;
    testUser.firstName = 'Ignacio';
    testUser.lastName = 'Diez';
    testUser.email = 'ig10@gmail.com';
    testUser.birthDate = new Date('1990-01-20');
    testUser.gender = 'Male';

    expect(testUser).toBeDefined();
    expect(testUser).not.toThrow();
    expect(testUser).toContain(User);
  });

});
