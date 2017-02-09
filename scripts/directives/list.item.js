(function () {
  'use strict';

  angular.module('testApp')
  .directive('listGroup', ListGroup)

  function ListGroup() {
    var bdo = {
    	restrict : 'E',
    	scope : {
    		list : '=?'
    	},
      	templateUrl: 'templates/list.item.html'
    }

    return bdo;
  }

})();
