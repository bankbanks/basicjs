// // // // /***********************
// // // // // type coercion 
// // // // */
// // // // // var firstName = 'Bank'; // string
// // // // // var age = 25;              // number

// // // // // console.log(firstName + ' ' + age);

// // // // // var job, isMarried;

// // // // // job = 'student';
// // // // // isMarried = false;

// // // // // console.log(firstName + ' is a ' + age +' years old ' + 
// // // // // job + '. Is he married? ' + isMarried);

// // // // // // variable mutation

// // // // // age = 'twenty five';
// // // // // job = 'driver';

// // // // // alert(firstName + ' is a ' + age +' years old ' + 
// // // // // job + '. Is he married? ' + isMarried);
// // // // // var lastName = prompt('What is his last name?');
// // // // // console.log(firstName + ' ' + lastName);




// // // // /***********************
// // // //  * basic operators
// // // //  */
// // // // var yearBank, yearBook, year;
// // // // var now = 2020;
// // // // ageBank = 26;
// // // // ageBook = 25;
// // // // var yearbank = now - ageBank;
// // // // var yearbook = now - ageBook;
// // // // console.log(yearbank + ' ' + yearbook);
// // // // var bankOlder = ageBank > ageBook;
// // // // console.log(bankOlder);




// // // // // type of operators
// // // // console.log(typeof bankOlder);
// // // // console.log(typeof ageBank);
// // // // console.log(typeof 'bankOlder');
// // // // var x;
// // // // console.log(typeof x);



// // // // operator precedence

// // // var now = 2020;
// // // var yearBank = 1994;
// // // var fullAge = 18;

// // // //multiple operator
// // // var isFullAge = now - yearBank >= fullAge; //true
// // // console.log(isFullAge);

// // // // Grouping
// // // var ageBank = now - yearBank; 
// // // var ageCherry = 28;
// // // var average = (ageBank + ageCherry) / 2; 
// // // console.log(average);   

// // // //Multiple assignments
// // // var x, y;
// // // x = y = (3 + 5) * 4 - 6; // =26
// // // console.log(x, y);

// // // // More operators

// // // x *=2;
// // // console.log(x);
// // // x += 10;
// // // console.log(x);
// // // x--;
// // // console.log(x);


// // Coding challenge
// // var cherryHeight = 1.50;
// // var cherryMass = 42;

// // var bankHeight = 1.70;
// // var bankMass = 75;

// // var cherryBmi = cherryMass / (cherryHeight ** 2);
// // console.log(cherryBmi);

// // var bankBmi = bankMass / (bankHeight * bankHeight);
// // console.log(bankBmi);

// // if (bankBmi > cherryBmi) {
// //     console.log('BankBMI is higher than Cherry')
// // } else{
// //     console.log('CherryBMI is higher than Bank')
// // }


// // // Boolean logic
// // var firstName = 'Bank';
// // var age = 19;

// // if (age < 13){
// //     console.log(firstName + ' is a boy.');
// // }   else if (age >= 13 && age < 20){
// //     console.log(firstName + ' is a teenager.');
// // }   else if (age >= 20 && age < 30){
// //     console.log(firstName + ' is a young man.');
// // }
// // //     else {
// // //     console.log(firstName + ' is a man.');
// // // }

// // //Alternative way to write ternary
// var firstName = 'Bank';
// var age = 26;

// // if (age >=18){
// //     var drink = 'beer'
// // } else {
// //     var drink = 'juice'
// // }
// // // console.log(drink);
// // // Ternary operator and switch statements

// // age>=18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');


// // var drink = age >= 18 ? 'Beer' : 'juice';
// // console.log(drink);



// // Switch statement

// var job = '';
// switch (job){
//     case 'teacher':
//     case 'instructor':
//     console.log(firstName + ' teaches students to code');
//     break;
//     case 'cop':
//     console.log(firstName + ' catches bad guy');
//     break;
//     case 'lifeguard':
//     console.log(firstName + ' save the pool');
//     break;
//     default:
//     console.log(firstName + ' does something else');
// }



// var firstName = 'Bank';
// var age = 25;

// // if (age < 13){
//     console.log(firstName + ' is a boy.');
// }   else if (age >= 13 && age < 20){
//     console.log(firstName + ' is a teenager.');
// }   else if (age >= 20 && age < 30){
//     console.log(firstName + ' is a young man.');
// }
//     else {
//     console.log(firstName + ' is a man.');
// // }


// switch (true){
//     case age < 13:
//     console.log(firstName + ' is a boy.');
// break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
// break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.')
// break;
//     default:
//         console.log(firstName + ' is a man.');    
// }


//truthy and falsy values and equality operator
// falsy values : undefined, null, 0, '', NaN
// truthy values : not falsy values
// var height;
// height = 0
// if (height || height === 0)  {
//     console.log('Variable is defined');
// } else{
//     console.log('Variable has not been defined');
// }

// // Equality operators
// if(height == 23);{

// }

// var john;
// var mike;
// johnTeamScore1 = 89,
// johnTeamScore2 = 120
// johnTeamScore3 = 103

// mikeTeamScore1 = 116
// mikeTeamScore2 = 94
// mikeTeamScore3 = 123

// var johnAverage = (johnTeamScore1 + johnTeamScore2 + johnTeamScore3) / 3;
// var maryAverage = (97 + 134 + 105) / 3;

// var mikeAverage = (mikeTeamScore1 + mikeTeamScore2 + mikeTeamScore3) / 3;
// console.log('Mike average is ' + mikeAverage + ',' +  ' John average is ' + johnAverage);

// if (johnAverage > mikeAverage){ 
//     console.log('John wins with' + johnAverage);
// } else if (mikeAverage > johnAverage){
    
//     console.log('mike has more average score which is ' + mikeAverage);
// } else{
//     console.log(' It\'s a draw');
// }



//functions

// function calculateAge(birthYear){
//     return 2020 - birthYear;
// }
// var ageBank = calculateAge(1994);
// var ageMom = calculateAge(1963);
// var ageDad = calculateAge(1963);
// var ageBook = calculateAge(1995);
// console.log(ageBank, ageMom, ageDad, ageBook);


// function yearUntilRetirement(year, firstName){
// var age = calculateAge(year);
// var retirement = 60 - age;
// console.log(firstName + ' will be retire in ' + retirement + ' years ')
// }

// yearUntilRetirement(1994, 'Bank');
// yearUntilRetirement(1963, 'Mom');
// yearUntilRetirement(1963, 'Dad');