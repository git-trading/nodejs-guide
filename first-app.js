const fs = require('fs');

console.log('Hello from Node.js')
// first arg = path to file + filename; second arg = contents of file
fs.writeFileSync('hello.txt', 'Hello from Node.js')