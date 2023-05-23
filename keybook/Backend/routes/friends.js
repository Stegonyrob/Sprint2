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

//Friend request
router.get('/request', async function (req, res, next) {
    const receptor_id = req.params.user_id
    try {
        const friendRequest = await sequelize.query(
            "SELECT friend.receptor_id, user.id, user.name FROM user INNED JOIN friend ON friend.sender_id = user.id WHERE friend.receptor_id = ? AND friend.status = ?",
            [receptor_id, FRIEND_STATUS.PENDING])
        res.status(200).send(friendRequest);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
});

module.exports = router;