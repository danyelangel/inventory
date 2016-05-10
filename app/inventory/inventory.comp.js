(function () {
  'use strict';
  angular
    .module('inventory', [])
    .component('inventoryEl', {
      templateUrl: 'inventory/inventory.tpl.html',
      controller: [Controller]
    });

  function Controller() {
    var $ctrl = this;
    $ctrl.title = 'Title';
  }
}());
