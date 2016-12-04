(function() {
  'use strict';

  angular
    .module('teamdecode')
    .directive('teamdecodeUserInfo', teamdecodeUserInfo);

  /** @ngInject */
  function teamdecodeUserInfo(teamdecodeApi) {
    return {
      templateUrl: 'app/components/teamdecode-user-info/teamdecode-user-info.html',
      link: userInfoLink
    };

    function userInfoLink(scope, elem) {
      scope.account = teamdecodeApi.getUserInfo().Account;
    }
  }

})();
