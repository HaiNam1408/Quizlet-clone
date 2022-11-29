var mongoose = require('mongoose')

const TermSchema = new mongoose.Schema({
    lesson_id: {
        type: String
    },
    term: {
        type: String
    },
    mean: {
        type: String
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model('Term', TermSchema)