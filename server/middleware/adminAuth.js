import express from "express";
import db from "../config/db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
router.post("/adminlogin", (req, res) => {
  const { email, mot_de_passe } = req.body;
  if (!email || !mot_de_passe) {
    return res.json({
      loginStatus: false,
      Error: "L'email et le mot de passe sont réquis",
    });
  }
  const sql =
    "SELECT * FROM utilisateur WHERE email = ? AND mot_de_passe = ? AND type_utilisateur = 'admin'";
  db.query(sql, [email, mot_de_passe], (err, result) => {
    if (err) {
      return res.json({ loginStatus: false, Error: "Erreur de la requête" });
    }
    if (result.length > 0) {
      const userEmail = result[0].email;
      const token = jwt.sign(
        { role: "admin", email: userEmail },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 100,
      });
      return res.json({ loginStatus: true, identifiant: result[0].nom[0] });
    } else {
      return res.json({
        loginStatus: false,
        Error: "Email ou mot de passe incorrect!",
      });
    }
  });
});

export { router as adminAuth };
