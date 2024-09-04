// Needed Resources 
const express = require("express")
const router = new express.Router() 
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")

/*** deliver a Login view */

router.get("/login",(accountController.buildLogin))


module.exports = router;