import express from "express";
import { signup } from "../controllers/userController.js";

const route = express.Router();

route.get("/signup", (req, res) => {
  return res.render("signup");
});
route.post("/signup", signup);

export default route;
