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
      var tasksTimeGroup = {};
      teamdecodeApi.getTasks().tasks.forEach(function (item) {
        var id = item.Task.created_at.split(' ')[0];
        tasksTimeGroup[id]
          ? tasksTimeGroup[id].push(item.Task)
          : tasksTimeGroup[id] = [item.Task];
      });
      scope.tasksTimeGroup = tasksTimeGroup;
    }
  }

})();
