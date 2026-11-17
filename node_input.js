
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", function(name) {
    console.log("Hello " + name + "!");
    rl.close();
});
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

rl.question('enter no', function(answer) {
    console.log(answer);
    rl.close();
});