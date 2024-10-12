import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.post("/publication/creer", (res, req) => {
  const { titre, contenu, image, id_utilisateur } = req.body;

  if (!titre || !contenu || !id_utilisateur) {
    return res.status(400).json({
      message: "Les champs titre, contenu, et id_utilisateur sont obligatoires",
    });
  }

  const sql = `INSERT INTO Publication (titre, contenu, image, id_utilisateur) VALUES (?, ?, ?, ?)`;
  db.query(sql, [titre, contenu, image, id_utilisateur], (err, result) => {
    if (err) return res.status(500).json(err);
    res
      .status(201)
      .json({ message: "Publication créée avec succès", id: result.insertId });
  });
});

export { router as publicationRoute };
