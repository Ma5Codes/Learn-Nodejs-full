const path = require('path')

console.log("Directory name:", path.dirname(__filename));
console.log("File name:", path.basename(__filename));
console.log("Extension name:", path.extname(__filename));

const joinedPath = path.join(__dirname, 'user', 'name', 'files', 'file.txt');
console.log("Joined path:", joinedPath);

const resolvedPath = path.resolve('user', 'name', 'files', 'file.txt');
console.log("Resolved path:", resolvedPath);

const normalizedPath = path.normalize('/user/name/files/file.txt');
console.log("Normalized path:", normalizedPath);