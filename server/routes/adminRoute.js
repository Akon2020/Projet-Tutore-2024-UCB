import express from "express";
import db from "../config/db.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import path from "path";
import multer from "multer";

const router = express.Router();
router.get("/totalusers", (req, res) => {
  const sql = "SELECT COUNT(id) as utilisateur FROM utilisateur";
  db.query(sql, (err, result) => {
    if (err) {
      return res.json({ Status: false, Error: "Query error" });
    }
    return res.json({ Status: true, Result: result });
  });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: true });
});

export {router as adminRoute}