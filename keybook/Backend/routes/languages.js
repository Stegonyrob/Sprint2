var express = require('express');
const sequelize = require("../db/connection");
var router = express.Router();

/* GET languages listing. */
router.get('/', async function (req, res) {
    try {
        const languagesList = await sequelize.query(
            "SELECT * FROM languages", {
            type: sequelize.QueryTypes.SELECT,
        })
        res.status(200).send(languagesList);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
});
// GET languages of specific user
router.get("/:language_user_id", async function (req, res) {
    const userId = req.params.language_user_id;
    const result = await sequelize.query(
        `SELECT * FROM languages WHERE language_user_id = ${userId}`
    );
    if (result[0].length) {
        res.status(200).send(result[0][0]);
    } else {
        res.status(404).send({ error: "Usuario no encontrado" });
    }
});

module.exports = router;