const chalk = require('chalk');
const yargs = require('yargs')

const getNotes = require('./notes')


// Create add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function (argv) {
        console.log('Title :- ' + argv.title)
        console.log('Body :- '+argv.body)
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing a note')
    }
});

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
});
// Create list command
yargs.command({
    command: 'list',
    describe: 'List all note',
    handler: function () {
        console.log('Listing all note')
    }
})

yargs.parse()