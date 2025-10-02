import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
// import db from "./config/db.js";
import { adminAuth } from "./middleware/adminAuth.js";
import { adminRoute } from "./routes/adminRoute.js";
import { documentationRoute } from "./routes/documentationRoute.js";
import { publicationRoute } from "./routes/publicationRoute.js";
// import session from "cookie-session";
// import crypto from "crypto";
// import { google } from "googleapis";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cookieParser());

// app.use({
//   name: "sid",
//   secret: process.env.SESSION_SECRET,
//   maxAge: 24 * 60 * 60 * 1000,
//   httpOnly: true,
// });

// const oauth2Client = new google.auth.OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
//   process.env.CLIENT_OAUTH_REDIRECT
// );
app.use("/images", express.static("public/images/uploads"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true, limit: "1024mb" }));
app.use(bodyParser.json({ limit: "1024mb" }));
// app.use(cors())
app.use(
  cors({
    origin: [process.env.URL_ORIGIN],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
// app.use((_, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   next();
// });

// function requireAuth(req, res, next) {
//   if (!req.session.user) {
//     return res.redirect("/connexion");
//   }
//   next();
// }

// app.get("/auth/google", (req, res) => {
//   const state = crypto.randomBytes(16).toString("hex");
//   req.session.oauth_state = state;

//   const url = oauth2Client.generateAuthUrl({
//     access_type: "offline",
//     prompt: "consent",
//     scope: ["openid", "email", "profile"],
//     state,
//   });
//   res.redirect(url);
// });

// app.get("/auth/google/callback", async (req, res, next) => {
//   try {
//     const { code, state } = req.query;
//     if (!state || state !== req.session.oauth_state) {
//       return res.status(400).send("State invalide");
//     }
//     delete req.session.oauth_state;

//     const { tokens } = await oauth2Client.getToken(code);
//     oauth2Client.setCredentials(tokens);

//     const oauth2 = google.oauth2({ version: "v2", auth: oauth2Client });
//     const { data: user } = await oauth2.userinfo.get();
//     req.session.user = {
//       id: user.id,
//       email: user.email,
//       name: user.name,
//       picture: user.picture,
//       verified_email: user.verified_email,
//     };
//     res.redirect("/register?oauth=success");
//   } catch (error) {
//     console.error(error);
//     res.redirect("/register?oauth=error");
//   }
// });

// app.get("/register", (req, res) => {
//   if (req.session.user) {
//     const u = req.session.user;
//     return res.send(`
//       <h1>Connexion</h1>
//       <p>Authentification Google réussie pour <b>${u.email}</b> </p>
//       <img src="${u.picture}" alt="avatar" width=""64" height="64" />
//       <p><a href="/app">Entrez dans l'application</a></p>
//       <p><a href="/logout">Se déconnecter</a></p>
//       `);
//   }
//   res.send(`
//     <h1>Connexion</h1>
//     <a href="/auth/google">Se connecter avec Google</a>
//     `);
// });

// app.get("/app", requireAuth, (req, res) => {
//   res.send(`Bienvenue ${req.session.user.name}! <a href="/logout">Logout</a>`);
// });

// app.get("/logout", (req, res) => {
//   req.session = null;
//   res.redirect("/connexion");
// });

app.use("/", documentationRoute);
app.use("/auth", adminAuth);
app.use("/admin", adminRoute);
app.use("/api", publicationRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Le serveur est lancé au http://localhost:${PORT}/`);
  console.log(process.env.URL_ORIGIN);
});
