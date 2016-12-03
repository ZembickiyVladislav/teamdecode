(function() {
  'use strict';

  angular
    .module('teamdecode')
    .directive('teamdecodeCreateDetails', teamdecodeCreateDetails);

  /** @ngInject */
  function teamdecodeCreateDetails() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/teamdecode-create-details/teamdecode-create-details.html',
      scope: {
          creationDate: '='
      },
      controller: CreateDetailsController,
      controllerAs: 'createDetails'
    };

    /** @ngInject */
    function CreateDetailsController() {}
  }

})();
