// let game = prompt('put in the number')
// let answer = game
// // {
// if (answer <=45){
//     alert('too Low')
// }
// else if (answer >=47){
//     alert('too High')
//     }
let game = prompt('game start');
let answer;
while (answer != game) {
    answer = prompt('put in the answer');
    if (answer < game) {
        alert('too low');
    }
    else if (answer > game) {
        alert('too high');
    }
    else alert('correct');
}



