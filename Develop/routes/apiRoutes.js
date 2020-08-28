// dependenices

const router = require('express').Router();
const store = require ('../db/store.js');

//Retriving notes
router.get('/notes', function(req,res) {
    //error message
    store.getNotes().then(notes => res.json(notes))
});


//creating note
router.post('/notes', function(req,res) {
    store.addNote(req.body).then(note => res.json(note))
});

//deleting notes
router.delete('/notes/:id', function(req, res) {
    store.removeNote(req.params.id).then(() => res.json({ok: true}))
});

module.exports = router;