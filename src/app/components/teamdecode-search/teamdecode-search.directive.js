(function() {
  'use strict';

  angular
    .module('teamdecode')
    .directive('teamdecodeSearch', teamdecodeSearch);

  /** @ngInject */
  function teamdecodeSearch() {
    return {
      templateUrl: 'app/components/teamdecode-search/teamdecode-search.html',
      link: SearchLink,
    };

    /** @ngInject */
    function SearchLink() {}
  }

})();
