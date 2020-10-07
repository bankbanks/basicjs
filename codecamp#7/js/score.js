let score = prompt('score')
let message;
if (score >= 80) {
    message = 'A';
} else if (score >= 70) {
    message = 'B';
}
else if (score >= 60) {
    message = 'C';
}
else if (score >= 50) {
    message = 'D'
}
else {
    message = 'F'

}
alert(message)
