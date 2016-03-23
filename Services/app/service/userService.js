var userServceFn = function($http){
    this.users = function(){
       return $http.get('app/data/users.json') 
    }

}

main.service('userService',['$http', userServceFn]);