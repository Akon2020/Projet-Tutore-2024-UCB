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

router.delete("/publication/supprimer/:id", (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM Publication WHERE id_publication = ?`;

  db.query(sql, [id], (err, result) => {
    if (err)
      return res
        .status(500)
        .json({ Status: false, Error: "Erreur de la requête" });

    if (result.affectedRows > 0) {
      res.status(200).json({
        message: "Publication supprimée avec succès",
      });
    } else {
      res.status(404).json({
        message: "Publication non trouvée",
      });
    }
  });
});

router.put("/publication/modifier/:id", (req, res) => {
  const { id } = req.params;
  const { titre, contenu, image } = req.body;

  if (!titre || !contenu) {
    return res.status(400).json({
      message: "Les champs titre et contenu sont obligatoires",
    });
  }

  const sql = `UPDATE Publication SET titre = ?, contenu = ?, image = ? WHERE id_publication = ?`;

  db.query(sql, [titre, contenu, image, id], (err, result) => {
    if (err)
      return res
        .status(500)
        .json({ Status: false, Error: "Erreur de la requête" });

    if (result.affectedRows > 0) {
      res.status(200).json({
        message: "Publication modifiée avec succès",
      });
    } else {
      res.status(404).json({
        message: "Publication non trouvée",
      });
    }
  });
});

router.get("/publication/:id/commentaire/afficher", (req, res) => {
  const { id } = req.params;

  const sql = `
    SELECT c.id_commentaire, c.message, c.date_heure, u.nom, u.post_nom, u.prenom
    FROM Commentaire c
    JOIN utilisateur u ON c.id_utilisateur = u.id_utilisateur
    WHERE c.id_publication = ?
    ORDER BY c.date_heure DESC
  `;

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json(err);

    res.status(200).json(result);
  });
});
router.post("/publication/:id/commentaire/ajouter", (req, res) => {
  const { id } = req.params;
  const { message, id_utilisateur } = req.body;

  if (!message || !id_utilisateur) {
    return res.status(400).json({
      message: "Les champs message et id_utilisateur sont obligatoires",
    });
  }

  const sql = `INSERT INTO Commentaire (message, id_publication, id_utilisateur) VALUES (?, ?, ?)`;

  db.query(sql, [message, id, id_utilisateur], (err, result) => {
    if (err)
      return res
        .status(500)
        .json({ Status: false, Error: "Erreur de la requête" });

    res.status(201).json({
      message: "Commentaire ajouté avec succès",
      id_commentaire: result.insertId,
    });
  });
});


export { router as publicationRoute };
