/// <reference path="../typings/index.d.ts" />

export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  const home = { name: 'home', url: '/', component: 'customForm' };
  const user = { name: 'user', url: '/user', component: 'showUser' };

  $stateProvider
    .state(home)
    .state(user);
}
