const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/assignment";

const connection= () => {
try {
     mongoose.connect(url);
    console.log(`connecting to the DB`)

} catch (error) {
    console.log(`error connecting to DB ${error}`)
}
}

module.exports = connection;