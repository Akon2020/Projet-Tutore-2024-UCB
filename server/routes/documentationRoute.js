import express from "express";
import db from "../config/db.js";
import dotenv from "dotenv";
dotenv.config;

const route = express.Router();

route.get("/", (req, res) => {
  res.render("index");
});

route.get("/docs", (req, res) => {
  res.render("docs");
});

// =============NOT FOUND=============
route.use((req, res) => {
  res.status(404).render("notfound");
});
// =============NOT FOUND=============

export { route as documentationRoute };
