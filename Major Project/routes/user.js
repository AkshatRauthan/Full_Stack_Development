const express = require("express");
const router = express.Router({mergeParams : true});
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middlewares.js");


// 01. New Route : Registering New User And Automaic Login With That Account
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});
router.post("/signup", wrapAsync(async (req, res, next) => {
    try {
        let {username, password, email} = req.body;
        const newUser = new User({username, email});
        const registeredUser = await User.register(newUser, password);
        req.login(newUser, (error) => {
            if (error){
                return next(error);
            } else {
                req.flash("Success", "Welcome To WanderLust!");
                res.redirect("/listings");
            }
        });
    } catch(error){
        req.flash("error", error.message);
        res.redirect("/signup");
    }
}));


// 02. Login Route : Login Existing User
router.get("/login",saveRedirectUrl, (req, res) => {
    res.render("users/login.ejs");
});
router.post("/login",saveRedirectUrl,passport.authenticate("local", { failureRedirect : "/login", failureFlash : true}), async (req, res) => {
    req.flash("success", "Welcome Back To Wanderlust!");
    if (res.locals.redirectUrl) return res.redirect(res.locals.redirectUrl);
    else res.redirect(`/listings`);
});


// 03. Logout Route : Logout Current User
router.get("/logout", (req, res, next) => {
    req.logout((error) => {
        if (error){
            return next(error);
        } else {
            req.flash("success", "You Are Logged Out Now!");
            res.redirect("/listings");
        }
    })
});

module.exports = router;