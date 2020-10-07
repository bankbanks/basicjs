// // function sumAll(...args) {
// //     let sum = 0;
// //     for(let arg of args) sum += arg;

// //     return sum;
// // }

// // console.log(sumAll(1));
// // console.log(sumAll(1, 2));
// // console.log(sumAll(1, 2, 3));
// // console.log(sumAll())
// // console.log('5',...'123')

// // function mergeChar(...chars){
// //     let text = ""
// //     for(let char of chars) text += char;

// //     return text ;
// // }

// //  let text = mergeChar("g","o","o")
// // console.log(text)

// // function showName(firstName, lastName, ...titles) {
// //     console.log(firstName + ' ' + lastName);

// //     console.log(titles[0]);
// //     console.log(titles[1]);
// //     console.log(titles.length);
// // }

// // showName('Julius','Caesar', 'Consul', 'Imperator');

// // console.log(showName('Bank'))

// // function showNumber(first, second, ...numbers) {
// //         console.log(numbers);
// //         console.log(arguments);
// // }

// // // showNumber(1,2,3,4,5,6);

// // let arr = [3, 5, 1];

// // let arr2 = [3, 5, 1, 8, 9, 5];

// // // let merged = [0, ...arr, 2, ...arr2];

// // // console.log(merged)

// // let arrCopy =[...arr];

// // alert(JSON.stringify(arr) === JSON.stringify(arrCopy));

// // alert(arr===arrCopy)

// // let [firstName,,,title] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

// // console.log(title);

// // let user = new Map();
// // user.set('name', 'age');
// // user.set('age', '30');

// // for(let [key, value] of user) {
// //     console.log('${key}:${value}');
// // }

// // console.log(user)

// // // let [name = prompt('name?'), surname = prompt('surname?')] = ['Julius'];

// // // alert(name);

// // // alert(surname);

// // let options = { height, width, title} = { width:300, height: 500, bank: 'Menu'}

// // let { width:w, height:h, title} = options;

// // console.log(w)

// // let option = {
// //     size: {
// //         width: 100,
// //         height: 200
// //     },
// //     items: ['']
// // }

// // let salaries = {
// //     'john': 10000,
// //     'Pete': 300,
// //     'Mary': 2500
// // };

// // function topSalaries(obj){
// //     let max = -1;
// //     let name= '';
// //     for(let key in obj){
// //         if(obj[key] > max ) {
// //             max = obj[key];
// //             name = key;
// //         }
// //     }
// //     return name;
// // }

// // console.log(topSalaries(salaries))

// let animal = {
//     eats: false
//   };

//   let rabbit = {
//     jumps: false,
//     __proto__: animal
//   };
//   console.log(Object.keys(rabbit));

// for(let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);

//     if (isOwn) {
//       alert(`Our: ${prop}`); // Our: jumps
//     } else {
//       alert(`Inherited: ${prop}`); // ถูกถ่ายทอดเรียบร้อย: eat
//     }
// }
let head = {
  glasses: 1,
};

let table = {
    __proto__:head,
  pen: 3,
};
let bed = {
    __proto__:table,
  sheet: 1,
  pillow: 2,
};
let pockets = {
    __proto__:bed,
  money: 2000,
};





console.log(pockets.glasses)