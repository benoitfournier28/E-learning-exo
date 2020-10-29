const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bodyParser = require("body-parser");

const  cardSchema = new Schema({
    image: String,
    title: String,
    description: String,
    time: String,
    ranking: Number,
    cours: [String]
});

const cardModel = mongoose.model("card", cardSchema);

module.exports = cardModel;

