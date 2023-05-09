var express = require('express');
const sequelize = require("../db/connection");
var router = express.Router();
const bcrypt = require("bcrypt");

const salt = 10;

/* GET users listing. */
router.get('/', async function (req, res, next) {
  try {
    const usersList = await sequelize.query("SELECT * FROM user", {
      type: sequelize.QueryTypes.SELECT,
    });
    res.status(200).send(usersList);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
});


//POST create new user
router.post("/register", async function (req, res) {
  try {
    const { name, lastName, dob, city, country, phone, email, password } =
      req.body;
    const blankPhoto = "https://i.postimg.cc/SNk2LBzX/blank-Avatar.png";

    const hashPassword = await bcrypt.hash(password, salt);

    const emailExists = await sequelize.query(
      "SELECT * FROM user WHERE email = ?",
      { type: sequelize.QueryTypes.SELECT, replacements: [email] }
    );
    if (emailExists.length > 0) {
      return res.status(400).json({ error: "El email ya está registrado" });
    } else {
      const newUser = await sequelize.query(
        `INSERT INTO user (name, last_name, email, password, date_of_birth, profile_picture, city, country, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        {
          type: sequelize.QueryTypes.INSERT,
          replacements: [
            name,
            lastName,
            email,
            hashPassword,
            dob,
            blankPhoto,
            city,
            country,
            phone,
          ],
        }
      );
      res.status(200).send({
        user_id: newUser[0],
        name,
        email,
        hashPassword,
      });
      console.log("Usuario creado con éxito");
    }
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: e.message });
  }
});

//POST login
router.post("/auth", async (req, res) => {
  try {
    const { user, password } = req.body;
    const result = await sequelize.query(
      `SELECT * FROM user WHERE  email = '${user.email}'`
    );
    if (result[0].length) {
      const validPassword = await bcrypt.compare(
        password,
        result[0][0].password
      );
      if (validPassword) {
        res.status(200).send({ id: result[0][0].id });
      } else {
        res.status(400).send({ error: "Contraseña incorrecta" });
      }
    }
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: "Email no encontrado en base de datos" });
  }
});


// DELETE user by ID
router.delete("/:id/delete", async (req, res) => {
  const userId = req.params.id;
  try {
    await sequelize.query(`DELETE FROM user WHERE id = ${userId}`);
    res.status(200).send({ message: "Cuenta borrada con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Error al borrar cuenta" });
  }
});

module.exports = router;
