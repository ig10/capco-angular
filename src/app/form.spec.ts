/// <reference path="../../typings/index.d.ts" />

import * as angular from 'angular';
import 'angular-mocks';
import {form} from './form';

describe('Form', () => {
  beforeEach(() => {
    angular
      .module('capcoApp', ['app/form.html'])
      .component('capcoApp', form);
    angular.mock.module('capcoApp');
  });

  it('Should render a form', angular.mock.inject(($rootScope: ng.IRootScopeService, $compile: ng.ICompileService) => {
    const element = $compile('<custom-form></custom-form>')($rootScope);
    $rootScope.$digest();
    expect(element.find('form').length).toEqual(1);
  }));
});
