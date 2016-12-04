(function() {
  'use strict';

  angular
    .module('teamdecode')
    .directive('teamdecodeCreateProject', teamdecodeCreateProject);

  /** @ngInject */
  function teamdecodeCreateProject($mdSidenav, $rootScope) {
    return {
      templateUrl: 'app/components/teamdecode-create-project/teamdecode-create-project.html',
      transclude: true,
      replace: true,
      link: createProjectLink
    };

    /** @ngInject */
    function createProjectLink(scope) {
      $rootScope.createProject = {
        toggleSideBar: $mdSidenav('createProject').toggle,
        isOpen: $mdSidenav('createProject').isOpen
      }
    }
  }

})();
