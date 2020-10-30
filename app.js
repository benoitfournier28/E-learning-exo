const express = require("express");
const app = express();
const bodyParser = require("body-parser");
//const Data = require("./back/Data/Models/card_models");
// var materialize = require("materialize-css");
const port = 3000;
const axios = require("axios");
let data = null;

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
    //console.log(response);
    //data = reponse;
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
    console.log(data);

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

function onSuccess(response) {
    const array = response;
    const arrayLength = Object.keys(array).length 
    console.log(arrayLength)
    for(let i = 0; i <= arrayLength; i++) {
        //*
        const title = array.data[i].title;
        const cours = array.data[i].cours;
        const description = array.data[i].description;
        const image = array.data[i].image;
        const time = array.data[i].time;
        const ranking = array.data[i].ranking;
        //*/
        //console.log(`${cours}, ${title}, ${description}, ${image}, ${time}, ${ranking}`);
        //assignDataValue(cours, title, description, image, time, ranking)
    }
    data[0] = title;
    data[1] = cours;
    data[2] = description;
    data[3] = image;
    data[4] = time;
    data[5] = ranking;
}
    
    function assignDataValue(cours, title, description, image, time, ranking) {
    
        const upData = new Data()
        upData.cours = cours;
        upData.title = title;
        upData.description = description;
        upData.image = image;
        upData.time = time;
        upData.ranking = ranking;
    
        //upData.save();
        return upData;
    }