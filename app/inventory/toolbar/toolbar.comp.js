(function () {
  'use strict';
  angular
    .module('inventory')
    .component('invToolbar', {
      templateUrl: 'inventory/toolbar/toolbar.tpl.html',
      controller: ['$mdSidenav', Controller]
    });

  function Controller($mdSidenav) {
    var $ctrl = this;
    $ctrl.showSidenav = showSidenav;
    function showSidenav() {
      $mdSidenav('left').toggle();
    }
  }
}());
