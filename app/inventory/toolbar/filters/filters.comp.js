(function () {
  'use strict';
  angular
    .module('inventory')
    .component('invFilters', {
      templateUrl: 'inventory/toolbar/filters/filters.tpl.html',
      controller: [Controller]
    });

  function Controller() {
    var $ctrl = this;
    $ctrl.title = 'Plop';
  }
}());
