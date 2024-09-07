const mysql = require("mysql2");

const connectDB = () => {
  const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  db.connect((err) => {
    if (err) {
      console.log("Erreur lors de la connexion à la base de donnée");
      return;
    }
    console.log("Base de donnée connectée avec succès");
  });
  return db;
};

/* db.connect((err) => {
  if (err) throw err;
  console.log('Base de donnée connectée avec succès...');
}); */

module.exports = connectDB;
