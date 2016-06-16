angular
   .module('app')
   .controller('StaffController', StaffController);
function StaffController() {
  var vm = this;
 
  vm.name = 'Bob'
  vm.phone = '6179997294'
  vm.email = 'bob@gmail.com'
}