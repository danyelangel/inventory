(function () {
  'use strict';
  angular
    .module('inventory')
    .component('invHeader', {
      bindings: {
        isAscending: '=',
        sortBy: '='
      },
      templateUrl: 'inventory/header/header.tpl.html',
      controller: [Controller]
    });

  function Controller() {
    var $ctrl = this;
    // Properties
    $ctrl.isAscending = true;
    $ctrl.sortBy = 'category';
    // API
    $ctrl.setOrder = setOrder;
    function setOrder(property) {
      if (property === $ctrl.sortBy) {
        $ctrl.isAscending = !$ctrl.isAscending;
      } else {
        $ctrl.isAscending = true;
        $ctrl.sortBy = property;
      }
    }
  }
}());
