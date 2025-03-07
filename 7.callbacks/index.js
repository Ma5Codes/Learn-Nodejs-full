const fs = require('fs');


function person(name, callbackfn){
    console.log(`Hello ${name}`);
    callbackfn();
}

function address(){
    console.log('I am from Kenya');
}

person("ma5Codes", address);

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
      console.log("Error reading file:", err);
      return;
    }
    console.log(data);
  });