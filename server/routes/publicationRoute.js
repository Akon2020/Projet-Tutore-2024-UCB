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

router.get("/publication/afficher", (req, res) => {
  const sql = "SELECT * FROM Publication";
  db.query(sql, (err, result) => {
    if (err)
      return res
        .status(500)
        .json({ Status: false, Error: "Erreur de la requête" });
    return res.status(200).json({ Status: true, Result: result });
  });
});

router.get("/publication/afficher/:id", (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT p.id_publication, p.titre, p.contenu, p.image, u.nom, u.post_nom, u.prenom
    FROM Publication p
    JOIN utilisateur u ON p.id_utilisateur = u.id_utilisateur
    WHERE p.id_publication = ?
  `;

  db.query(sql, [id], (err, result) => {
    if (err)
      return res
        .status(500)
        .json({ Status: false, Error: "Erreur de la requête" });

    if (result.length > 0) {
      res.status(200).json(result[0]);
    } else {
      res.status(404).json({
        message: "Publication non trouvée",
      });
    }
  });
});

export { router as publicationRoute };
