var express = require('express');
const sequelize = require("../db/connection");
var router = express.Router();

/* GET hobbies listing. */
router.get('/', async function (req, res) {
    try {
        const hobbiesList = await sequelize.query(
            "SELECT * FROM hobbies", {
            type: sequelize.QueryTypes.SELECT,
        })
        res.status(200).send(hobbiesList);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
});
// GET hobbies of specific user
router.get("/:hobby_user_id", async function (req, res) {
    const userId = req.params.hobby_user_id;
    const result = await sequelize.query(
        `SELECT * FROM hobbies WHERE hobby_user_id = ${userId}`
    );
    if (result[0].length) {
        res.status(200).send(result[0][0]);
    } else {
        res.status(404).send({ error: "Usuario no encontrado" });
    }
});

module.exports = router;