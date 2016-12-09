(function() {
    var app = angular.module('list-module', []);
    var selectedTask = null;
    
    app.controller('task-list-controller', ['$http', '$rootScope', function($http, $rootScope) {
        var controller = this;
        controller.tasks = {};    
        
        controller.refresh = function() {
            controller.tasks = {};
            $http.get('rest/task').success(function(result) {
                splitTasks(result);
            });
        };
        
        (function() {
            controller.refresh();
        })();
        
        $rootScope.$on('refresh', function() {
            controller.refresh();
        });
        
        var splitTasks = function(tasks) {
            for (var i in tasks) {
                var task = tasks[i];
                var date = task.taskDate;
                if (controller.tasks[date] === null || controller.tasks[date] === undefined) {
                    controller.tasks[date] = new Array();
                }
                controller.tasks[date].push(task);
            }
        };
        
        controller.days = function() {
            return Object.keys(controller.tasks);
        };
        
        controller.taskIconClick = function(task) {
            task.isDone = !task.isDone;
            $http.put('rest/task', task);
        };
        
        controller.editTaskClick = function(task) {
            selectedTask = task;
        };
        
        controller.addTaskClick = function() {
            selectedTask = {id: -1};
        };
        
        controller.isSelected = function(task) {
            if (selectedTask === null) {
                return false;
            }
            return selectedTask.id === task.id;
        };
    }]);

    var taskEditController = app.controller('task-edit-controller', ['$http', '$rootScope', function($http, $rootScope) {
        var controller = this;
        
        controller.isTaskSelected = function() {
            return selectedTask !== null;
        }
        
        controller.getTask = function() {
            return selectedTask;
        }
        
        controller.onOk = function() {
            if (selectedTask.id === -1) {
                $http.post('rest/task', selectedTask).success(function() {
                    selectedTask = null;
                    $rootScope.$emit('refresh', {});
                });
            } else {
                $http.put('rest/task', selectedTask).success(function() {
                    selectedTask = null;
                    $rootScope.$emit('refresh', {});
                });
            }
        }
        
        controller.onCancel = function() {
            selectedTask = null;
            $rootScope.$emit('refresh', {});
        }
        
        controller.onDelete = function() {
            $http.delete('rest/task/' + selectedTask.id).success(function() {
                selectedTask = null;
                $rootScope.$emit('refresh', {});
            });
        }
    }]);

    taskEditController.directive('taskEdit', function() {
        return {
            templateUrl: 'task-edit.html'
        }
    });
    
    var pageControlles = app.controller('page-controller', ['$window', '$rootScope', function($window, $rootScope) {
            
            var controller = this;
            controller.logout = function(){                
                $window.location.href='logout';                
            };
    }]);
    
})();


