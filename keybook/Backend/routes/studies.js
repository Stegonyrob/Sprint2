var express = require('express');
const sequelize = require("../db/connection");
var router = express.Router();

/* GET studies listing. */
router.get('/', async function (req, res, next) {
    try {
        const studiesList = await sequelize.query(
            "SELECT * FROM studies", {
            type: sequelize.QueryTypes.SELECT,
        })
        res.status(200).send(studiesList);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
});

module.exports = router;