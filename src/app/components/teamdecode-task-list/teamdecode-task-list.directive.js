(function() {
  'use strict';

  angular
    .module('teamdecode')
    .directive('teamdecodeTaskList', teamdecodeTaskList);

  /** @ngInject */
  function teamdecodeTaskList(teamdecodeApi) {
    return {
      templateUrl: 'app/components/teamdecode-task-list/teamdecode-task-list.html',
      link: taskListLink
    };

    /** @ngInject */
    function taskListLink(scope) {
      scope.tasks = teamdecodeApi.getTasks().tasks;
    }
  }

})();
