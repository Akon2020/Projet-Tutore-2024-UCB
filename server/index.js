import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import db from "./config/db.js";
import { adminAuth } from "./middleware/adminAuth.js";
import { adminRoute } from "./routes/adminRoute.js";
import { documentationRoute } from "./routes/documentationRoute.js";
import { publicationRoute } from "./routes/publicationRoute.js";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/images", express.static("public/images/uploads"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: true, limit: "1024mb" }));
app.use(bodyParser.json({ limit: "1024mb" }));
app.use(
  cors({
    origin: [process.env.URL_ORIGIN],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: [
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Credentials",
    ],
  })
);
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use("/", documentationRoute);
app.use("/auth", adminAuth);
app.use("/admin", adminRoute);
app.use("/api", publicationRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Le serveur est lancé au http://localhost:${PORT}/`);
  console.log(process.env.URL_ORIGIN)
});
