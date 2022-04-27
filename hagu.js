const input = require("readline-sync")

function hangman(word) {
    let wrong = 0;
    stages = ["",
    "________        ",
    "|               ",
    "|        |      ",
    "|        0      ",
    "|       /|\\    ",
    "|       / \\    ",
    "|               "
    ];
    wList = word.split('');
    // console.log(wList);
    board = "_".repeat(word.length);
    blist = board.split('');
    win = false;
    console.log('Welcome to Gangman Hame!\n');
    // console.log(blist);
    let hangman = ""
    while (wrong < stages.length) {
        let uguess = input.question('Please Hago kuch! : ')
        if (wList.includes(uguess)) {
            cind = wList.indexOf(uguess);
            blist.splice(cind, 1, uguess)
            // wList.splice(cind, 1, '$')

        } else {
            wrong+=1
            console.log(blist.join(' '));
            for(let i =0 ;i <= wrong;i++){
                console.log(stages[i]);
            }
            // e = wrong + 1
        };
        // hangman += stages.splice(0,e).join("\n") + "\n"

        if (!blist.includes('_')) {
            console.log('Kya haga hai Man Gya!');
            console.log(blist);
            win = true
            break;

        };
    };
    if (!win) {
        console.log(hangman);
        console.log(`Hagna bhi nhi aata thoo ;) [ ${word} ] tha word`);
    };

};

let word = 'Hago'
hangman(word)