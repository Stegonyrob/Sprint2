var express = require('express');
const sequelize = require("../db/connection");
var router = express.Router();

/* GET friends listing. */
router.get('/', async function (req, res, next) {
    try {
        const hobbiesList = await sequelize.query(
            "SELECT * FROM friend", {
            type: sequelize.QueryTypes.SELECT,
        })
        res.status(200).send(hobbiesList);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
});

module.exports = router;