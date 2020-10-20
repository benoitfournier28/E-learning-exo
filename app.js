var express = require("express");
const app = express();
var bodyParser = require("body-parser");
// var materialize = require("materialize-css");
const port = 3000;

app.use(express.static("public"));
// app.use(materialize)
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");


// Chargement de la page index.html
app.get('/', (req, res) => {
    res.render('index');
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});