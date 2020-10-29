const data = require("../Data/data");
const Card = require("../Data/Models/card_models");

module.exports = {
    createCard(req, res) {
        const newCard = new Card ({
                image: req.body.image,
                title: req.body.title,
                description: req.body.description,
                time: req.body.time,
                ranking: req.body.ranking,
                cours: req.body.cours
            })
        newCard.save()
        .then(card => {
            res.json(card);
        })
        res.end() 
        next()
    },

    readCard(req, res){
        const listCard = Card.find({})
        .then(listcard => res.status(200).json(listcard))
        .catch(error => res.status(400).json({ error }));
        console.log(listCard)
        //res.json(listCard)
    }
}