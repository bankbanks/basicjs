// // // function add( a,b){
// // //     let c = a+b;
// // // };






// // // const add = function (a, b) {
// // //     return a + b;
// // // }
// // // console.log(add(2, 1))





// // // const add = (a, b) => {
// // //     return a + b;
// // // }
// // // console.log(add(3, 1))



// // // const add =(a, b) => a+b;

// // // // console.log(add(4, 6))



// // // function sayHi(name, doActivity) {
// // //     console.log(`Hi, ${name}`);
// // //     doActivity();
// // // }

// // // const sayBye = () => {
// // //     console.log("Bye, Codecamp#7");
// // // }

// // // sayHi('Codecamp#7', sayBye);




// // function greaterThan(n) {
// //     return function (m) {
// //         return m > n;
// //     };
// // }

// // let greaterThan10 = greaterThan(10);  // 

// // console.log(greaterThan10(10))



// // function lesserThan(b) {
// //     return function (a) {
// //         return b > a
// //     }
// // }

// // let lesserThan10 = lesserThan(10)
// // console.log(lesserThan10(5))   

// function map(array, callback){
//     let results = []
//     for( let item of array) {
//         results.push(callback(item))
//     }
//     return results
// }

// function doSomething(item){
//     return item + '-TAG';
// }
// function bank(item){
//     return item * 2
// }


// const results = map([ '1', '2', '3'], doSomething);
// console.log(results, ';;; results')


// console.log(map([4,5,6], bank ))






const numbers = [ 'a', 'a', 'b', 'c'];

const results = numbers.reduce((acc, char)) {
   if(!acc[char]) {
       acc[char] = 1;
   } else {
       acc[char]++;
   }
    return acc;
} 

