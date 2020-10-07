let name = prompt('Who are you?');
let password = ''

if (name === 'admin') {
    let password = prompt('What is your password?');

    if (password == 'codecamp#5') {
        alert('Welcome');
    }
    else if (password != 'codecamp#5') {
        alert('Wrong password!');
    }
    else (password == "") 
        alert('cancel');
    
}

