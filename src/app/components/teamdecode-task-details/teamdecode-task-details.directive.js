(function() {
  'use strict';

  angular
    .module('teamdecode')
    .directive('teamdecodeTaskDetails', teamdecodeTaskDetails);

  /** @ngInject */
  function teamdecodeTaskDetails($mdSidenav, $rootScope) {
    return {
      templateUrl: 'app/components/teamdecode-task-details/teamdecode-task-details.html',
      transclude: true,
      replace: true,
      link: taskDetailsLink
    };

    /** @ngInject */
    function taskDetailsLink(scope) {
      $rootScope.taskDetails = {
        openSideBar: $mdSidenav('taskDetails').open,
        isOpen: $mdSidenav('taskDetails').isOpen,
        closeSideBar: $mdSidenav('taskDetails').close
      }
    }
  }

})();
