// //Login and Signup using txt file

const f = require("fs")
const input = require('readline-sync')

//----------------------------------------- required stuffs are upside

while(quiter<1){
    let name = input.question('Apna name dale : ')
    let email = input.question('Apna email id dale : ')
    
    let read = f.readFileSync('./fs/userData.txt', 'utf-8')
    if (read.includes(email)) {
        console.log('You already have account with this ${email} id\ntype 1 for login or press any key to exit ');
        let choice = input.questionInt('Choose a option : ')
        if(choice===1){
            pass
        }
        else{console.log('Try again');break}
    
    } else {
        let password = input.question('Apna Password dale : ')
        let a = f.appendFileSync('./fs/userData.txt', `${email},${password},${name}\n`)
        console.log(`you are now loged in with ${email}`);
        quiter++
    }

}
