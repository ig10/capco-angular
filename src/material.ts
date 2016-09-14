/// <reference path="../typings/index.d.ts" />

export default materialConfig;

/** @ngInject */
function materialConfig($mdThemingProvider: angular.material.IThemingProvider) {
  $mdThemingProvider.theme('customTheme')
    .primaryPalette('blue');

  $mdThemingProvider.setDefaultTheme('customTheme');
}
