// Dependencies

const util = require('util');
const fs = require('fs');
var { v1: uuidv4 } = require('uuid');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read(){
        return readFileAsync('db/db.json', 'utf8')
    }
    write(note) {
        return writeFileAsync('dn/db.json', JSON.stringify(note))
    }

    getNotes() {
        return this.read()
        .then(notes => {
            let parseNotes;
            try {
                parseNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parseNotes = [];
            }
            return parseNotes;
            
        })
    }

    addNote(note) {
        const { title, text } = note;
        if (!title || !text) {
            throw new Error('Note is Empty');
        }

        const addNote = { title, text, id: uuidv1() }
        return this.getNotes()
        .then(notes => [...notes, addNote])
        .then(updatedNotes => this.write(updatedNotes))
        .then(() => addNote);
    }

    removenote(id) {
        return this.getNotes()
        .then((remove) => remove.filter(removedNote => removedNote.id !== id))
        .then(filteredNotes => this.write(filteredNotes));
    }


}

module.exports = new Store();