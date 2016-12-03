(function() {
  'use strict';

  angular
    .module('teamdecode')
    .directive('teamdecodeCreateProject', teamdecodeCreateProject);

  /** @ngInject */
  function teamdecodeCreateProject() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/teamdecode-create-project/teamdecode-create-project.html',
      scope: {
          creationDate: '='
      },
      controller: CreateProjectController,
      controllerAs: 'createProject'
    };

    /** @ngInject */
    function CreateProjectController() {}
  }

})();
