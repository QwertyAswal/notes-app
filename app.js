const chalk = require('chalk')
const yargs = require('yargs')

const getNotes = require('./notes')

// Create add command
yargs.command({
    command:'add',
    describe:'Add new note',
    handler:function(){
        console.log('Adding a new note')
    }
})

// Create remove command
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:function(){
        console.log('Removing a note')
    }
})

// Create read command
yargs.command({
    command:'read',
    describe:'Read a note',
    handler:function(){
        console.log('Reading a note')
    }
})

// Create list command
yargs.command({
    command:'list',
    describe:'List all note',
    handler:function(){
        console.log('Listing all note')
    }
})
