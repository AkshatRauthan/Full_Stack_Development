const express = require(`express`);
const router = express.Router({mergeParams : true});
const User = require(`../models/user.js`);
const wrapAsync = require(`../utils/wrapAsync.js`);
const passport = require(`passport`);


// 01. New Route : Registering New User
router.get(`/signup`, (req, res) => {
    res.render(`users/signup.ejs`);
});
router.post(`/signup`, wrapAsync(async (req, res) => {
    try {
        let {username, password, email} = req.body;
        const newUser = new User({username, email});
        const registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.flash("Success", "Welcome To WanderLust!");
        res.redirect(`/listings`);
    } catch(error){
        req.flash("error", error.message);
        res.redirect(`/signup`);
    }
}));


// 02. Login Route : Login Existing User
router.get(`/login`, (req, res) => {
    res.render(`users/login.ejs`);
});
router.post(`/login`,passport.authenticate("local", { failureRedirect : "/login", failureFlash : true}), async (req, res) => {
    req.flash("success", "Welcome Back To Wanderlust!");
    res.redirect(`/listings`);
});

module.exports = router;