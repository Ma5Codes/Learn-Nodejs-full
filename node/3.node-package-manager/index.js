const lodash = require('lodash');

const names = ['John', 'Jane', 'Bob', 'Alice', 'Mike'];

// Capitalize each name
const capitalize = lodash.map(names, lodash.capitalize);

// Chunk the array into groups of 2
const chunked = lodash.chunk(names, 2);

// Filter names that start with 'J'
const filtered = lodash.filter(names, name => name.startsWith('J'));

console.log('Capitalized:', capitalize);
console.log('Chunked:', chunked);
console.log('Filtered:', filtered);