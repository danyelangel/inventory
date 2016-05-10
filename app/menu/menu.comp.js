(function () {
  'use strict';
  angular
    .module('app')
    .component('menuEl', {
      templateUrl: 'menu/menu.tpl.html',
      controller: [Controller]
    });

  function Controller() {
    var $ctrl = this;
    $ctrl.urls = 'Title';
  }
}());
