(function() {
  'use strict';

  angular
    .module('teamdecode')
    .directive('teamdecodeProjectList', teamdecodeProjectList);

  /** @ngInject */
  function teamdecodeProjectList(teamdecodeApi) {
    return {
      templateUrl: 'app/components/teamdecode-project-list/teamdecode-project-list.html',
      link: projectListLink
    };

    /** @ngInject */
    function projectListLink(scope) {
      scope.projects = teamdecodeApi.getProjects().projects;
    }
  }

})();
