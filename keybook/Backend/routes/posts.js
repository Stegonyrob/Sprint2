var express = require('express');
const sequelize = require("../db/connection");
var router = express.Router();

/* GET posts listing. */
router.get('/', async function (req, res, next) {
    try {
        const postsList = await sequelize.query(
            "SELECT * FROM post", {
            type: sequelize.QueryTypes.SELECT,
        })
        res.status(200).send(postsList);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
});

module.exports = router;