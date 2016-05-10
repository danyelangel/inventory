(function () {
  'use strict';
  angular
    .module('inventory')
    .component('invItem', {
      bindings: {
        equipment: '<',
        category: '<'
      },
      templateUrl: 'inventory/list/item/item.tpl.html',
      controller: [Controller]
    });

  function Controller() {
    var $ctrl = this;
    $ctrl.title = 'Plop';
  }
}());
