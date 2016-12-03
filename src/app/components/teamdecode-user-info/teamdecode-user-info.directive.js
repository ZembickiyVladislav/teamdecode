(function() {
  'use strict';

  angular
    .module('teamdecode')
    .directive('teamdecodeUserInfo', teamdecodeUserInfo);

  /** @ngInject */
  function teamdecodeUserInfo() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/teamdecode-user-info/teamdecode-user-info.html',
      scope: {
          creationDate: '='
      },
      controller: UserInfoController,
      controllerAs: 'userInfo',
      bindToController: true
    };

    /** @ngInject */
    function UserInfoController() {}
  }

})();
