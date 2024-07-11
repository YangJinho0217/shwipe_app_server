const express = require("express");
const router = express.Router();

const web = require("../api/web");
const user = require("../api/user");
const board = require("../api/board");

router.use("/web", web);
router.use("/user", user);
router.use("/board", board);

module.exports = router;
