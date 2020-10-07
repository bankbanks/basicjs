// ชื่อของผู้เรียน เป็น String
// อายุของผู้เรียนเป็น number
// บ้านของตัวเองเป็น String
// โสดหรือไม่โสดเป็น boolean
// คะแนนความฉลาดของตัวเองเป็น number (เต็ม 10)




// let user    = {
//     name: "bank",
//     age: 25,

// }
// user.address= 'nonthaburi'
// user["status"] = single
// user['student iq']= 0
// console.log(user)


// let propertiesName = "age";

// let obj = {
//   propertiesName: 20, // จะได้ key เป็น propertiesName
// }

// console.log(obj);

// let user = {}
// user.name = 'sonter'
// user.surName = 'pakorn'
// user.name = 'boy'
// delete user.name
// console.log(user)
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  function sum(obj){
    let sum = 0;  
    for(let key in obj){
        sum = sum + obj[key];
      }

      return sum;
  }


  sum(salaries)