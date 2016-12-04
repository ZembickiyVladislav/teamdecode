(function() {
  'use strict';

  angular
    .module('teamdecode')
    .directive('teamdecodeCreateTask', teamdecodeCreateTask);

  /** @ngInject */
  function teamdecodeCreateTask($rootScope, $mdSidenav) {
    return {
      templateUrl: 'app/components/teamdecode-create-task/teamdecode-create-task.html',
      link: createTaskLink
    };

    /** @ngInject */
    function createTaskLink(scope) {
      $rootScope.createTask = {
        openSideBar: $mdSidenav('createTask').open,
        isOpen: $mdSidenav('createTask').isOpen,
        closeSideBar: $mdSidenav('createTask').close
      }
    }
  }

})();
