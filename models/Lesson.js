var mongoose = require('mongoose')

const LessonSchema = new mongoose.Schema({
    user_id: {
        type: String
    },
    lesson_name: {
        type: String
    },
    description: {
        type: String
    },
    term: {
        type: Array
    },
    mean: {
        type: Array
    },
    image: {
        type: Array
    }
}, {timestamps: true})

module.exports = mongoose.model('Lesson', LessonSchema)