(function() {
  'use strict';

  angular
    .module('teamdecode')
    .directive('teamdecodeLoad', teamdecodeLoad);

  /** @ngInject */
  function teamdecodeLoad() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/teamdecode-load/teamdecode-load.html',
      scope: {
          creationDate: '='
      },
      controller: LoadController,
      controllerAs: 'load'
    };

    /** @ngInject */
    function LoadController() {}
  }

})();
