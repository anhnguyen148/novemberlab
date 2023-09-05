const express = require("express");

const router = express.Router();

let serverVar = "This is where to displays what you pass to server... "
router.get("/", (req, res) => {
    // res.send(`Hello from port ${port}.`);
    res.render("index", {
        "clientVar": serverVar
    })
});

module.exports = router;