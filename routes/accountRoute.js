// Needed Resources 
const express = require("express")
const router = new express.Router() 
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")

/*** deliver a Login view */

router.get("/login",utilities.handleErrors(accountController.buildLogin))

/***deliver registration view */
router.get("/register",(accountController.buildRegister))

/** route registration */
router.post(
    "/register",utilities.handleErrors(accountController.registerAccount)
)


module.exports = router;