(function () {
  'use strict';

  angular.module('testApp')
  .directive('listItem', ListItem)

  function ListItem() {
    var bdo = {
      templateUrl: 'templates/list.item.html'
    }

    return bdo;
  }

})();
