const express = require("express");
var router = express.Router();
var cors = require("cors")

router.post('/apply', (req, res) => {
    const today = new Date()

    const userData = {
        user_name: req.body.user_name,
        user_number: req.body.user_number,
        user_email: req.body.user_email,
        user_password: req.body.user_password,
        user_confirm_password: req.body.user_confirm_password,
        created: today

    }

})

router.get('/login', (req, res) => {
    const userData = {
        user_email: req.body.login_email,
        user_password: req.body.login_password,
    }
})

module.exports = router