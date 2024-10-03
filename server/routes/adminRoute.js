import express from "express";
import db from "../config/db.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import path from "path";
import multer from "multer";
import { Result } from "express-validator";

const router = express.Router();
router.get("/totalusers", (req, res) => {
  const sql = "SELECT COUNT(id_utilisateur) as utilisateur FROM utilisateur";
  db.query(sql, (err, result) => {
    if (err) {
      return res.json({ Status: false, Error: "Erreur de la requête" });
    }
    return res.json({ Status: true, Result: result });
  });
});

router.get("/totaladmin", (req, res) => {
  const sql =
    "SELECT COUNT(id_utilisateur) as admin FROM utilisateur WHERE type_utilisateur = 'admin'";
  db.query(sql, (err, result) => {
    if (err) {
      return res.json({ Status: false, Error: "Erreur de la requête" });
    }
    return res.json({ Status: true, Result: result });
  });
});

router.get("/users", (req, res) => {
  const sql = "SELECT * FROM utilisateur ORDER BY nom";
  db.query(sql, (err, result) => {
    if (err) {
      return res.json({ Status: false, Error: "Erreur de la requête" });
    }
    return res.json({ Status: true, Result: result });
  });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: true });
});

export { router as adminRoute };
