var express = require("express");
var axios = require("axios");
const app = express();
var bodyParser = require("body-parser");
// var materialize = require("materialize-css");
const port = 3000;

const cardRoute = require("./back/Routes/card_routes");
app.use(bodyParser.json());

app.use(express.static("public"));
// app.use(materialize)
app.use(bodyParser.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.use("/card", cardRoute);

axios.get('http://localhost:3000/card/get')
  .then(function (response) {
    onSuccess(response)
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// Chargement de la page index.html
app.get('/', (req, res) => {
    res.render('index');
    });

app.get('/catalogue', (req, res) => {
    res.render('catalogue');
});

app.get('/detail/:id', (req, res) => {
    res.render('detail', { id: req.params.id});
});

app.get('/connect', (req, res) => {
    res.render('connect');
});

app.get('/register', (req, res) => {
    res.render("register");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});