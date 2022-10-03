const { readFile, readFileSync } = require('fs');
// const txt = readFileSync('./hello.txt', 'utf8');
readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt);
});

console.log('do this ASAP');