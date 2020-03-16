const db = require('../database');

const ExampleSchema = new db.Schema({
    text: {
        type: String,
        required: true,
        lowercase: true
    },
    number: {
        type: Number,
        required: true
    },
    bool: {
        type: Boolean,
        default: true
    }
});

module.exports = db.model('Example', ExampleSchema);
