import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.post("/publication/creer", (req, res) => {
  const { titre, contenu, image, id_utilisateur } = req.body;

  if (!titre || !contenu || !id_utilisateur) {
    return res.status(400).json({
      message: "Les champs titre, contenu, et id_utilisateur sont obligatoires",
    });
  }

  const nomSql = `SELECT * FROM utilisateur WHERE id_utilisateur = ?`;

  db.query(nomSql, [id_utilisateur], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.length > 0) {
      const nomPers = `${result[0].nom} ${result[0].post_nom} ${result[0].prenom}`;

      const sql = `INSERT INTO Publication (titre, contenu, image, id_utilisateur) VALUES (?, ?, ?, ?)`;

      db.query(sql, [titre, contenu, image, id_utilisateur], (err, result) => {
        if (err) return res.status(500).json(err);

        res.status(201).json({
          message: "Publication créée avec succès",
          id: result.insertId,
          nomPersonne: nomPers,
        });
      });
    } else {
      return res.status(404).json({
        message: "Utilisateur non trouvé",
      });
    }
  });
});

export { router as publicationRoute };
