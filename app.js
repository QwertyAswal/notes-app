const fs = require('fs');

// fs.writeFileSync('notes.txt', 'Hello from NodeJS!!');

fs.appendFileSync('notes.txt','\nNew Line Appended!!')