const express = require("express");
const router = express.Router();
const api = require("./api/v0");
const dayJS = require("dayjs");

//select pages on nav
router.get("/", (req, res) => {
  res.render("pages/index", { pageTitle: "Home", dayJS });
});

router.get("/register", (req, res) => {
  res.render("pages/register", { pageTitle: "Register", dayJS });
});

router.get("/login", (req, res) => {
  res.render("pages/login", { pageTitle: "Login", dayJS });
});

//api
router.use("/api/v0", api);

module.exports = router;
