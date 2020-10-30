const mongoose = require("mongoose");
const Data = require("../Data/Models/card_models");



mongoose.connect("mongodb+srv://InfernoDei:test1234@diagmob.is5vn.mongodb.net/elearning?retryWrites=true&w=majority", {useNewUrlParser: true,useUnifiedTopology: true })

mongoose.connection.once("open", () => {
    console.log("on est connecté")
})
.on("error", (error) => {
    console.log("on n'est pas connecté" + error)
});




