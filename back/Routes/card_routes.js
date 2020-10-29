const espress = require("express");
const router = espress.Router();

const {createCard, readCard} = require("../Controllers/card_controllers");

router.route("/create")
    .post(createCard)

    
router.route("/get")
    .get(readCard)

module.exports = router
