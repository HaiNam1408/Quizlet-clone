var mongoose = require('mongoose')

const AccountSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String,
        default: "https://tchblg.de/wp-content/uploads/user-avatar.png"
    }
}, {timestamps: true})

module.exports = mongoose.model('Account', AccountSchema)