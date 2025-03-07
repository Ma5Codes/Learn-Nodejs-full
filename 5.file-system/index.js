const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, 'data files');

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log('folder created');
}

const filePath = path.join(dataFolder, 'data.txt');
//synchronous way of writing to a file
fs.writeFileSync(filePath, 'Hello World from Node');
console.log('file created');

const readContent = fs.readFileSync(filePath, 'utf-8');
console.log("FIle Content:", readContent);

fs.appendFileSync(filePath, '\n new Hello World from Node');
console.log('new file updated');

//asynchronous way of writing to a file
const asyncFilePath = path.join(dataFolder, 'asyncData.txt');
fs.writeFile(asyncFilePath, 'Hello World from async Node', (err) => {
    if (err) throw err;
       console.log('Async file created successfully');
    });
//read file async 
fs.readFile(asyncFilePath, 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('Async file content:', data);

    //append to file async
    fs.appendFile(asyncFilePath, '\n another new Hello World from async Node', (err) => {
        if (err) throw err;
        console.log('Async file updated successfully');
    });
    fs.readFile(asyncFilePath, 'utf-8', (err, updatedData) => {
        if (err) throw err;
        console.log('Async file content after update:', updatedData);
    });
});