const fs = require('fs')
const chalk = require('chalk')

// Add Note
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (duplicateNote) {
        console.log(chalk.red("Note Title Taken!!"))
    }
    else {

        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.green('New Note Added!!'))
    }
}

// Remove Note
const removeNote = (title) => {
    const notes = loadNotes()
    const temp = []
    var fl = true
    for (var i = 0; i < notes.length; i++) {
        if (notes[i].title === title) {
            fl = false
        }
        else {
            temp.push(notes[i])
        }
    }
    if (fl) {
        console.log(chalk.red('Note with title :- ' + title + ' not found!!'))
    }
    else {
        console.log(chalk.green('Note removed'))
        saveNotes(temp)
    }
}

// List Note
const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.inverse.bold('  Your Notes  '))
    console.log()
    notes.forEach(note => console.log(':- ' + chalk.italic(note.title)));
}

// Read Note
const readNote = (title) => {
    const notes = loadNotes()
    const searchedNote = notes.find((note) => note.title === title)
    if (searchedNote) {
        console.log('Note :-', chalk.inverse.bold.cyanBright(' ' + searchedNote.title + ' '))
        console.log(chalk.italic(searchedNote.body))
    }
    else {
        console.log(chalk.red('Note with title:- ' + title + ' not found!!'))
    }
}


// Util Functions
const saveNotes = (notes) => {
    const dataString = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataString)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataString = dataBuffer.toString()
        return JSON.parse(dataString)
    }
    catch (e) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}