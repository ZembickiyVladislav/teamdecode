(function() {
  'use strict';

  angular
    .module('teamdecode')
    .directive('teamdecodeProjectList', teamdecodeProjectList);

  /** @ngInject */
  function teamdecodeProjectList() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/teamdecode-project-list/teamdecode-project-list.html',
      scope: {
          creationDate: '='
      },
      controller: ProjectListController,
      controllerAs: 'projectList'
    };

    /** @ngInject */
    function ProjectListController() {}
  }

})();
