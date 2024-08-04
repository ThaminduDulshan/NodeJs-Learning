//Synchronously
// const { readFileSync, writeFileSync } = require("fs");
// console.log('Start');
// const first = readFileSync('./content/first.txt', 'utf8');
// const second = readFileSync('./content/second.txt', 'utf8');

// writeFileSync('./content/result-sync.txt',`Here is the result: ${first}, ${second} \n`,{flag:'a'} );

// console.log('done with this task');
// console.log('starting the next one');


//Asynchronously
const {readFile, writeFile} = require('fs');

readFile('./content/first.txt','utf8',(error, result)=>{
    if(error){
        console.log(error);
        return
    }
    const first = result;
    readFile('./content/second.txt','utf8',(error, result)=>{
        if(error){
            console.log(error);
            return
        }
        const second = result;

        writeFile('./content/write.txt',`my result is ${first} and ${second}`,()=>{
            console.log(' Successfully Writing Task ! ');
        });
    });
});

