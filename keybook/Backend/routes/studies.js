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
// GET studies from the user being logged
router.get("/:studies_user_id", async function (req, res) {
    const userId = req.params.studies_user_id;
    const result = await sequelize.query(
        `SELECT * FROM studies WHERE studies_user_id = ${userId}`
    );
    if (result[0].length) {
        res.status(200).send(result[0][0]);
    } else {
        res.status(404).send({ error: "Usuario no encontrado" });
    }
});


module.exports = router;