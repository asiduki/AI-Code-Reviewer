const express = require('express')
const router = express.Router();
const {codereviewer} = require("../Controller/ai.controller")

router.post("/", codereviewer);

module.exports = router ;