(function () {
  'use strict';
  angular
    .module('inventory')
    .component('invList', {
      bindings: {
        sortBy: '<',
        isAscending: '<'
      },
      templateUrl: 'inventory/list/list.tpl.html',
      controller: [Controller]
    });

  function Controller() {
    var $ctrl = this;
    $ctrl.title = 'Plop';
  }
}());
