// // let income = prompt("put your income");

// // function calTax(income) {
// //   if (income < 100000) {
// //     console.log("You don't have to pay tax");
// //   } else if (income >= 100000 && income <= 500000) {
// //     let tax = (income * 2) / 100;
// //     console.log( ' Your income is ' + income + ' You must pay' + tax);
// //   } else {
// //       let tax = (income * 5) / 100;
// //         console.log(" You must pay " + tax);
// //   }
// // }
// //     console.log(income)
// //     calTax(income)
// // 









// เขียนฟังก์ชันให้รับค่า เงินได้สุทธิ แล้วรีเทิร์นค่าออกมาเป็นภาษีที่ต้องชำระ
// // เงินได้สุทธิ < 150000 เสียภาษี 0%
// // 150000 <= เงินได้สุทธิ <= 300000 เสียภาษี 5% X (เงินได้สุทธิ - 150000)   ... (1)
// // 300000 <= เงินได้สุทธิ <= 500000 เสียภาษี 10% X (เงินได้สุทธิ -300000)   ... (2)
// // 500000 < เงินได้สุทธิ เสียภาษี 15% X (เงินได้สุทธิ -500000)   ... (3)
// // ภาษี = (1) + (2) + (3)

// // สมมติเงินได้ 400000 จะเสียภาษี ดังนี
// // (1) คิดจากยอด 150000 ถึง 300000 คิดเป็นเงิน (300000-150000) X 5% = 7500
// // (2) คิดจากยอด 300000 ถึง 400000 คิดเป็นเงิน (400000-300000) X 10% = 10000
// // จะเสียภาษีทั้งหมด (1) + (2) = 17500



// let netIncome = prompt('Enter your income to calculate your tax')
//     function callTax(netIncome){
//         if(netIncome < 150000){
//             console.log(' You\'re fine no need to worry :) ' )
//         } else if(netIncome <= 300000)
//             let tax = (netIncome * 5) / 100
//             console.log()
//     }