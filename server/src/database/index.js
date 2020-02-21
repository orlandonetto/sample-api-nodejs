const {DB_NAME, DB_HOST} = require('../config');
const mongoose = require('mongoose');

const DB_URL = `mongodb://${DB_HOST}/${DB_NAME}`;

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => console.log("Successfully Connection!"));

module.exports = mongoose;
