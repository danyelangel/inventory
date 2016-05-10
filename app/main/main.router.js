(function () {
  'use strict';
  angular
    .module('app')
    .config(function ($stateProvider, $urlRouterProvider) {
      //
      // For any unmatched url, redirect to /state1
      $urlRouterProvider.otherwise('/inventory');
      //
      // Now set up the states
      $stateProvider
        .state('inventory', {
          url: '/inventory',
          template: '<inventory-el layout="column"></inventory-el>'
        })
        .state('check', {
          url: '/check',
          template: '<check-el layout="column"></check-el>'
        });
    });
}());
