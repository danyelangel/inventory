(function () {
  'use strict';
  angular
    .module('inventory')
    .component('invFab', {
      templateUrl: 'inventory/fab/fab.tpl.html',
      controller: [Controller]
    });

  function Controller() {
    var $ctrl = this;
    $ctrl.name = 'plop';
  }
}());
