// Import node modules 
const router = require('express').Router();
const fs = require('fs');
const notes = require('../db/db.json');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

let counter = 0;

// GET Route for retrieving all the notes
router.get('/', (req, res) => {
    readFileAsync('./db/db.json').then(data => {
        res.json(JSON.parse(data));
    });
});

// POST Route for saving a note
router.post('/', (req, res) => {
    // Log that a POST request was received
    console.info(`${req.method} request recieved to add a note`);
    // const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title: req.body.title,
            text: req.body.text,
            id: counter,
        };

        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const parsedData = JSON.parse(data);
                parsedData.push(newNote);
                fs.writeFile('./db/db.json', JSON.stringify(parsedData), (err) =>
                err ? console.log(err) : console.info(`Data written to db.json`));
            };
        });

        counter++;
        res.json(notes);
    } else {
        res.error('Error in adding note');
    };
});

// DELETE Route for deleting a note
router.delete('/:id', (req, res) => {
    // Log that a DELETE request was received
    console.info(`${req.method} request recieved to delete a note`);
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const parsedData = JSON.parse(data);
            const results = parsedData.filter(note => note.id != req.params.id)

            fs.writeFile('./db/db.json', JSON.stringify(results), (err) =>
                err ? console.log(err) : console.info(`Note deleted from db.json`))
        };
    });

    res.json(notes);
});

module.exports = router;