angular 
   .module('app')
   .controller('ContactController', ContactController);
function ContactController() {
  var vm = this;
 
   vm.name = 'Steve';
   vm.email = 'steve@apple.com';
   vm.phone = '6268278378';
  this.changeName = function () {
    vm.name = 'Something else!'
  }
}