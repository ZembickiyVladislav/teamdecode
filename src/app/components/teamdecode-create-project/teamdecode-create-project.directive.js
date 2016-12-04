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
        openSideBar: $mdSidenav('createProject').open,
        isOpen: $mdSidenav('createProject').isOpen,
        closeSideBar: $mdSidenav('createProject').close
      }
    }
  }

})();
