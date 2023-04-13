const express = require("express");
const router = express.Router();
const path = router("path");

router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.)
});
