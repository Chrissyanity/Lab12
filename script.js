// created a module & controller
var app = angular.module('myToDo', []);
app.controller('myController', function($scope) {
// To-Do List as an object with chore name & priority level
    $scope.todos = [{
        name: 'Catch up on TV shows',
        importance: 'Low'
    }, {
        name: 'Complete Labs',
        importance: 'High'
    }, {
        name: 'Laundry',
        importance: 'High'
    }, {
        name: 'Clean Apt',
        importance: 'High'
    }, {
        name: 'Grocery Shopping',
        importance: 'Low'
    }];
    // Created a function that would push the properties of a new object input to the array
    $scope.addButton = function (){
      var obj = {
        name: $scope.userAdd,
        importance: $scope.userPriority
      };
      $scope.todos.push(obj);
      console.log($scope.todos);
    }
    
});
// $('#addButton').on('click', function() {
//     $('#stuffToDo').append('<li>' + $('#userAdd').val() + '</li>');
//     $('#userAdd').val('');
