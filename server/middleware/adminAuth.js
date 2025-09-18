import express from "express";
import db from "../config/db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import authMiddleware from "./authMiddleware.js";

const router = express.Router();

router.post("/adminlogin", async (req, res) => {
  const { email, mot_de_passe } = req.body;

  if (!email || !mot_de_passe) {
    return res.json({
      loginStatus: false,
      Error: "L'email et le mot de passe sont réquis",
    });
  }

  const sql =
    "SELECT * FROM utilisateur WHERE email = ? AND mot_de_passe = ? AND type_utilisateur = 'admin' OR 'super-admin'";

  try {
    db.query(sql, [email, mot_de_passe], (err, result) => {
      if (err) {
        return res.json({ loginStatus: false, Error: "Erreur de la requête" });
      }

      if (result.length > 0) {
        const userEmail = result[0].email;
        const token = jwt.sign(
          { role: "admin", email: userEmail },
          process.env.JWT_SECRET,
          { expiresIn: "6h" }
        );
        res.cookie("token", token, {
          httpOnly: true,
          secure: true,
          maxAge: 6 * 60 * 60 * 1000,
        });
        return res.json({ loginStatus: true, identifiant: result[0].nom[0], token });
      } else {
        return res.json({
          loginStatus: false,
          Error: "Email ou mot de passe incorrect!",
        });
      }
    });
  } catch (error) {
    return res.json({ loginStatus: false, Error: "Erreur de serveur" });
  }
});

router.post("/createadmin", async (req, res) => {
  const { nom, email, mot_de_passe } = req.body;

  if (!nom || !email || !mot_de_passe) {
    return res.json({
      success: false,
      Error: "Le nom, l'email et le mot de passe sont réquis",
    });
  }

  const checkSql = "SELECT * FROM utilisateur WHERE email = ?";
  db.query(checkSql, [email], (err, result) => {
    if (err) {
      return res.json({ success: false, Error: "Erreur de la requête" });
    }
    if (result.length > 0) {
      return res.json({ success: false, Error: "Email déjà utilisé" });
    }

    const insertSql =
      "INSERT INTO utilisateur (nom, email, mot_de_passe, type_utilisateur) VALUES (?, ?, ?, 'admin')";
    db.query(insertSql, [nom, email, mot_de_passe], (err2, result2) => {
      if (err2) {
        return res.json({ success: false, Error: "Erreur lors de la création" });
      }
      return res.json({ success: true, message: "Admin créé avec succès" });
    });
  });
});


router.get("/verifytoken", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Utilisateur authentifié" });
});

export { router as adminAuth };
