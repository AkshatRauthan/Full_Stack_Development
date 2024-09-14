const express = require("express");
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middlewares.js");
const userController = require(`../controllers/users.js`);


// 01. New Route : Registering New User And Automaic Login With That Account
router.route(`/signup`)
.get( userController.renderRegistrationForm)
.post(wrapAsync(userController.registerUser));


// 02. Login Route : Login Existing User
router.route(`/login`)
.get(saveRedirectUrl, userController.renderLoginPage)
.post(saveRedirectUrl,passport.authenticate("local", { failureRedirect : "/login", failureFlash : true}), userController.loginUser);


// 03. Logout Route : Logout Current User
router.get("/logout", userController.logoutUser);

module.exports = router;