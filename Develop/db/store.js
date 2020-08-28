// Dependencies

const util = require('util');
const fs = require('fs');
var { v1: uuidv1 } = require('uuid');
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
    

}