(function() {

  'use strict';

  angular
    .module('teamdecode')
    .factory('teamdecodeApi', teamdecodeApi);

  /** @ngInject */
  function teamdecodeApi($http, $q) {
    function getUserInfo() {
      return {
        "Account": {
          "username": "Michael Smith",
          "image_url": "https://s3-ap-northeast-1.amazonaws.com/testtask/avatars/user-20.png"
        }
      }
    }

    function logOut() {}

    function getProjects() {
      return {
        "projects": [{
          "Project": {
            "id": "14706",
            "title": "Great project",
            "task_count": "0"
          }
        }, {
          "Project": {
            "id": "14705",
            "title": "Home",
            "task_count": "0"
          }
        }, {
          "Project": {
            "id": "14707",
            "title": "Robots",
            "task_count": "0"
          }
        }, {
          "Project": {
            "id": "14704",
            "title": "To-Do",
            "task_count": "0"
          }
        }]
      }
    }

    return {
      getUserInfo: getUserInfo,
      logOut: logOut,
      getProjects: getProjects
    }
  }

})();
