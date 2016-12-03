(function() {
  'use strict';

  angular
    .module('teamdecode')
    .directive('teamdecodeCreateTask', teamdecodeCreateTask);

  /** @ngInject */
  function teamdecodeCreateTask() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/teamdecode-create-task/teamdecode-create-task.html',
      scope: {
          creationDate: '='
      },
      controller: CreateTaskController,
      controllerAs: 'createTask'
    };

    /** @ngInject */
    function CreateTaskController() {}
  }

})();
