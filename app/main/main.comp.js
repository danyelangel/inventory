(function () {
  'use strict';
  angular
    .module('app')
    .component('mainEl', {
      templateUrl: 'main/main.tpl.html',
      transclude: true,
      controller: [Controller]
    });

  function Controller() {
    var $ctrl = this;
    $ctrl.title = 'Title';
  }
}());
