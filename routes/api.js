var express = require('express');
var router = express.Router();

router.get("/", (req, res, next)=> {
    res.send("API");
});

router.get("/error", (req, res, next)=> {
    next(new Error("ERROR"));
});

module.exports = router;