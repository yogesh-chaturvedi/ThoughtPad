const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/notesApp')
    .then(() => {
        console.log('Connected Successfully')
    })
    .catch((error) => {
        console.log(error)
    })