const express = require("express");
const path = require("path"); // 추가

const router = express.Router();

/* GET home page. */
router.get("*", (req, res) => {
    // router.get('/', (req, res) => { 변경
    res.sendFile(path.join(__dirname, "../../client/dist", "index.html"));
    // res.render('index', { title: 'Express' }); 변경
});

module.exports = router;
