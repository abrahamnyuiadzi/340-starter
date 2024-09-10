// Needed Resources 
const express = require("express")
const router = new express.Router() 
const accountController = require("../controllers/accountController")
const utilities = require("../utilities")
const regValidate = require('../utilities/account-validation')

/*** deliver a Login view */

router.get("/login",utilities.handleErrors(accountController.buildLogin))

/***deliver registration view */
router.get("/register",(accountController.buildRegister))

// Process the registration data
router.post(
    "/register",
    regValidate.registationRules(),
    regValidate.checkRegData,
    utilities.handleErrors(accountController.registerAccount)
  )


module.exports = router;