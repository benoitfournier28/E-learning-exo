const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://InfernoDei:test1234@diagmob.is5vn.mongodb.net/elearning?retryWrites=true&w=majority", {useNewUrlParser: true,useUnifiedTopology: true })

mongoose.connection.once("open", () => {
    console.log("on est coco nez")
})
.on("error", (error) => {
    console.log("on n'est pas co" + error)
});


