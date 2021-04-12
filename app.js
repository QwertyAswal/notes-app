const getNotes = require('./notes')
const chalk = require('chalk')

const command = process.argv[2]

console.log(process.argv)

if (command === 'add') {
    console.log('Adding Note!')
}
else if (command === 'remove') {
    console.log('Removing Note!')
}
else {
    console.log('Invalid Request!!')
}