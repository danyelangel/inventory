(function () {
  'use strict';

  /* @ngdoc object
   * @name inventory
   * @description
   *
   */
  angular
    .module('app', [
      'ngMaterial',
      'ui.router',
      'inventory'
    ])
    .config(function ($mdThemingProvider) {
      $mdThemingProvider
        .theme('default')
        .primaryPalette('grey', {
          default: '100'
        });
      $mdThemingProvider
        .theme('dark')
        .primaryPalette('grey', {
          default: '800'
        });
      $mdThemingProvider
        .theme('grey')
        .primaryPalette('grey', {
          default: '500'
        });
      $mdThemingProvider
        .theme('blue')
        .primaryPalette('blue', {
          default: '700'
        });
    });
}());
