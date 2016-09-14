/// <reference path="../../../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-mocks';
import {User} from '../user';
import {IStorage} from './storage';

describe('Storage', () => {
  let storage: IStorage;
  let testUser: User;

  beforeEach(() => {
    let store = {};

    spyOn(localStorage, 'getItem').and.callFake( (key:string):String => {
     return store[key] || null;
    });
    spyOn(localStorage, 'setItem').and.callFake((key:string, value:string):string =>  {
      return store[key] = <string>value;
    });
  });

  it('Should be able to Store an empty User', () => {
    testUser = new User();
    expect(storage.put(testUser)).not.toThrow();
  });

  it('Should be able to Store a User', () => {
    testUser = new User('Ignacio', 'Diez', 'test@gmail.com');
    expect(storage.put(testUser)).not.toThrow();
  });

  it('Should be able to Retrieve a User', () => {
    testUser = new User('Ignacio');
    let storagedUser = storage.get();

    expect(storagedUser).toContain(User);
    expect(storagedUser.firstName).toBe('Ignacio');
    expect(storagedUser.email).not.toBe('test@gmail.com');
  });

});
