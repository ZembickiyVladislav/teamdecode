(function() {
  'use strict';

  angular
    .module('teamdecode')
    .directive('teamdecodeSearch', teamdecodeSearch);

  /** @ngInject */
  function teamdecodeSearch() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/teamdecode-search/teamdecode-search.html',
      scope: {
          creationDate: '='
      },
      controller: SearchController,
      controllerAs: 'search'
    };

    /** @ngInject */
    function SearchController() {}
  }

})();
