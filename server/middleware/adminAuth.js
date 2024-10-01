import express from "express";
import db from "../config/db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();
router.post("/adminlogin", (req, res) => {
  const sql =
    "SELECT * FROM utilisateur WHERE email = ? AND mot_de_passe = ? AND type_utilisateur = 'admin'";
  db.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) {
      return res.json({ loginStatus: false, Error: "Query error" });
    }
    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign(
        { role: "admin", email: email },
        "jwt_secret_key",
        { expiresIn: "1d" }
      );
      res.cookie("token");
      return res.json({ loginStatus: true });
    } else {
      return res.json({
        loginStatus: false,
        Error: "Email ou mot de passe incorrect!",
      });
    }
  });
});

export { router as adminAuth };
