(function() {
  'use strict';

  angular
    .module('teamdecode')
    .directive('teamdecodeTaskList', teamdecodeTaskList);

  /** @ngInject */
  function teamdecodeTaskList() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/teamdecode-task-list/teamdecode-task-list.html',
      scope: {
          creationDate: '='
      },
      controller: taskListController,
      controllerAs: 'taskList'
    };

    /** @ngInject */
    function taskListController() {}
  }

})();
