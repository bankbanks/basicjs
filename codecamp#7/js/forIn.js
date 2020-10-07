// let user = {
//     name: "bank",
//     age: 30,
//     isAdmin: true,
//     country: "thai",
//     lang: "thai lang",
//     a: 'b',
//     c: 'd',
//     d: ' e'


// };
// for (let key in user) {
//     alert(key);
//     alert(user[key]);
// }
// console.log(user)
let user = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10
}
    
    for(let key in user){
        if (key !== "d" && key !== "e") {
        console.log(`key: ${key}, ${user[key]}`);
    }
    }


  
  
//   console.lo