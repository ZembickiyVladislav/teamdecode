(function() {

  'use strict';

  angular
    .module('teamdecode')
    .factory('teamdecodeApi', teamdecodeApi);

  /** @ngInject */
  function teamdecodeApi() {
    function getUserInfo() {
      return {
        "Account": {
          "username": "Michael Smith",
          "image_url": "https://s3-ap-northeast-1.amazonaws.com/testtask/avatars/user-20.png"
        }
      }
    }

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

    function getTasks() {
      return {
        "tasks": [{
          "Task": {
            "id": "1918",
            "title": "Some title",
            "description": null,
            "created_at": "2016-12-05 19:27:50"
          }
        }, {
          "Task": {
            "id": "1917",
            "title": "Some title",
            "description": null,
            "created_at": "2016-12-05 19:27:45"
          }
        }, {
          "Task": {
            "id": "1916",
            "title": "Some title",
            "description": null,
            "created_at": "2016-12-05 19:27:41"
          }
        }, {
          "Task": {
            "id": "1915",
            "title": "Some title",
            "description": null,
            "created_at": "2016-12-04 19:27:30"
          }
        }, {
          "Task": {
            "id": "1914",
            "title": "Some title",
            "description": null,
            "created_at": "2016-12-04 19:27:26"
          }
        }, {
          "Task": {
            "id": "1913",
            "title": "Some title",
            "description": null,
            "created_at": "2016-12-04 19:27:22"
          }
        }, {
          "Task": {
            "id": "1912",
            "title": "Some title",
            "description": null,
            "created_at": "2016-12-04 19:27:18"
          }
        }, {
          "Task": {
            "id": "1911",
            "title": "Some title",
            "description": null,
            "created_at": "2016-12-07 19:27:15"
          }
        }, {
          "Task": {
            "id": "1910",
            "title": "Some title",
            "description": null,
            "created_at": "2016-12-04 19:27:10"
          }
        }, {
          "Task": {
            "id": "1909",
            "title": "Some title",
            "description": null,
            "created_at": "2016-12-08 19:27:07"
          }
        }],
        "total_count": 24
      }
    }

    return {
      getUserInfo: getUserInfo,
      getProjects: getProjects,
      getTasks: getTasks
    }
  }

})();
