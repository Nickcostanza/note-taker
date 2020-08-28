//Dependencies

const path = require('path');
const router = require('express').Router();

// join path from /notes to notes.html

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// Join path from * to index.hmtl

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;