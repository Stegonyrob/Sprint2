var express = require('express');
const sequelize = require("../db/connection");
var router = express.Router();

/* GET follow listing. */
router.get('/', async function (req, res) {
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

//GET following users list
router.get('/following/:user_id', async function (req, res) {
    const loggedId = req.params.user_id
    try {
        const following = await sequelize.query(`SELECT DISTINCT * FROM user INNER JOIN friend ON friend.user_friend2_id  = user.id WHERE friend.user_friend1_id = "${loggedId}" AND friend.status = 1`)
        res.status(200).send(following[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error interno del servidor");
    }
});

//POST follow user
router.post('/:id', async function (req, res) {
    const loggedId = req.body.logged_id
    const followId = req.params.id;

    const isFollowing = await sequelize.query(
        "SELECT * FROM friend WHERE user_friend1_id = ? AND user_friend2_id = ?",
        { type: sequelize.QueryTypes.SELECT, replacements: [loggedId, followId] }
    );

    if (isFollowing.length > 0) {
        return res.status(400).json({ error: "Usuario ya seguido. No se puede volver a seguir" });
    } else {
        try {
            await sequelize.query(
                "INSERT INTO friend (status, user_friend1_id, user_friend2_id) VALUES (?, ?, ?)",
                {
                    type: sequelize.QueryTypes.INSERT,
                    replacements: [
                        1, loggedId, followId
                    ],
                }
            );
            res
                .status(200)
                .send({ message: `Usuario ${loggedId} ahora sigue a usuario ${followId}` });

        } catch (error) {
            console.error(error);
            res.status(500).send("Error interno del servidor. Usuario no encontrado");
        }
    }
});

//DELETE unfollow user
router.delete("/unfollow/:id", async (req, res) => {
    const loggedId = req.body.logged_id
    const unfollowId = req.params.id;

    const isFollowing = await sequelize.query(
        "SELECT * FROM friend WHERE user_friend1_id = ? AND user_friend2_id = ?",
        { type: sequelize.QueryTypes.SELECT, replacements: [loggedId, unfollowId] }
    );
    if (isFollowing.length > 0) {
        try {
            await sequelize.query(`DELETE FROM friend WHERE user_friend1_id = ${loggedId} AND user_friend2_id = ${unfollowId}`);
            res.status(200).send({ message: `Usuario ${loggedId} ha dejado de seguir a usuario ${unfollowId}` });
        } catch (error) {
            console.error(error);
            res.status(500).send({ error: "Error al dejar de seguir usuarios" });
        }
    } else {
        return res.status(400).json({ error: "Usuario no seguido" });
    }
})

module.exports = router;