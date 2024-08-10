
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: {type: String, require: true},
    age: Number,
    gender: String
})

// to make model

const UserModel = mongoose.model("user", UserSchema)

module.exports = UserModel;