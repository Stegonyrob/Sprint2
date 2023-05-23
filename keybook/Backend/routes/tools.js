var express = require('express');
const sequelize = require("../db/connection");
var router = express.Router();

/* GET tools listing. */
router.get('/', async function (req, res, next) {
    try {
        const toolsList = await sequelize.query(
            "SELECT * FROM tools", {
            type: sequelize.QueryTypes.SELECT,
        })
        res.status(200).send(toolsList);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
});
// GET tools of specific user
router.get("/:tool_user_id", async function (req, res) {
    const userId = req.params.tool_user_id;
    const result = await sequelize.query(
        `SELECT * FROM tools WHERE tool_user_id = ${userId}`
    );
    if (result[0].length) {
        res.status(200).send(result[0][0]);
    } else {
        res.status(404).send({ error: "Usuario no encontrado" });
    }
});

module.exports = router;