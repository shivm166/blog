import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import connDb from "./config/Db.js";
import route from "./routes/userRoute.js";

dotenv.config();

const app = express();
app.use(express.json()); // To parse JSON data
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/user", route);
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    message: "Welcome to EJS Example!",
  });
});

// Connect MongoDB
connDb();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
