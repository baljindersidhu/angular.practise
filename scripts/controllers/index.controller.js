(function () {
  'use strict';
  angular.module('testApp')
  .controller('indexCtrl', IndexController)

  IndexController.$inject = ['$scope'];

  function IndexController($scope) {
    this.items = [
      {
        name : 'Ford',
        description : 'Quality is job one'
      },
      {
        name : 'IBM',
        description : 'Think'
      },
      {
        name : 'Google',
        description : 'Don’t be evil'
      },
      {
        name : 'NSA',
        description : 'Anything is possible, the impossible just takes longer'
      },
      {
        name : 'Addidas',
        description : 'Impossible is nothing'
      },
      {
        name : 'Apple Computer',
        description : 'Think Different'
      },
      {
        name : 'Honda',
        description : 'The Power of Dreams'
      },
      {
        name : 'Dell',
        description : 'Yours is here'
      },
      {
        name : 'KFC',
        description : 'Finger Lickin’ Good'
      }
    ];
  }
})();
