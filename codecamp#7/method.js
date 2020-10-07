// // let user = {
// //   name: "John",
// //   go: function() { alert(this.name) }
// // }
// //  (user.go) ()
// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// };

// // let user = makeUser();

// // alert( user.ref.name ); // What's the result?
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//   },
//   down() {
//     this.step--;
//   },
//   showStep: function() { // shows the current step
// //     alert( this.step );
// //   }
// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");

// alert(user.name); // Jack
// alert(user.isAdmin); // false
// let user = new user('Jack')



function Calculator(){
  this.read = function(){
  this.num1 = +prompt('1st number'),
  this.num2 = +prompt('2nd number')
  }

 this.sum = function(){
   return this.num1 + this.num2
 }

 this.mul = function(){
   return this.num1 * this.num2
  }
  this.


} 
const call = new Calculator()
call.read();
console.log(call.sum());
console.log(call.mul());
  









