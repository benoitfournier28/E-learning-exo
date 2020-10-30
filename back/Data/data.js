const axios = require("axios");
const mongoose = require("mongoose");
const Data = require("../Data/Models/card_models");



mongoose.connect("mongodb+srv://InfernoDei:test1234@diagmob.is5vn.mongodb.net/elearning?retryWrites=true&w=majority", {useNewUrlParser: true,useUnifiedTopology: true })

mongoose.connection.once("open", () => {
    console.log("on est connecté")
})
.on("error", (error) => {
    console.log("on n'est pas connecté" + error)
});

axios.get('http://localhost:3000/card/get')
.then(function (response) {
    onSuccess(response)
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});


function onSuccess(response) {
    const array = response;
    const arrayLength = Object.keys(array).length 
    console.log(arrayLength)
    for(let i = 0; i <= arrayLength; i++) {
        const cours = array.data[i].cours;
        const title = array.data[i].title;
        const description = array.data[i].description;
        const image = array.data[i].image;
        const time = array.data[i].time;
        const ranking = array.data[i].ranking;
        console.log(`${cours}, ${title}, ${description}, ${image}, ${time}, ${ranking}`);
    
        assignDataValue(cours, title, description, image, time, ranking)
    
        }
    }
    
    function assignDataValue(cours, title, description, image, time, ranking) {
    
        const upData = new Data()
        upData.cours = cours;
        upData.title = title;
        upData.description = description;
        upData.image = image;
        upData.time = time;
        upData.ranking = ranking;
    
        upData.save();
    }






