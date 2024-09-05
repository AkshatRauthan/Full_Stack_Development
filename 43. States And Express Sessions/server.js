const express = require('express');
const app = express();
const path = require(`path`);
const Users = require(`./routes/users.js`);
const Posts = require(`./routes/posts.js`);
const session = require(`express-session`);
const cookieParser = require(`cookie-parser`);
const flash = require(`connect-flash`);
const secret = `FTDccdfw62557`;
const sessionOptions = session({
    secret : secret,
    resave : false,
    saveUninitialized : true
});
// Resave : True => Forces The Session To be Resaved Even If It Is Not Modified During The Request.
// SaveUninitialized : True => This Option Forces Even Uninitialized Sessions To be Saved On Our Session Store (Local Store).

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

app.listen(8080, () => {
    console.log(`\nServer Is Listening On Port 8080`);
})

app.use(cookieParser(secret));
app.use(sessionOptions);
app.use(flash());

// Secret Is String Of Random Characters Or An Array Of Such Strings That Are Not Easily Parsable For Us In Order To Encrypt
// The Session Id. This Session Id Will be Sent In The Form OF A Signed Cookie.

// Sessions Are Generally Used To Store Common Data For A User That Is Needed To Be Displayed For Diffrent Pages.
// For All The Instances Of The Website On The Same Browser The Session Id's Will Remain The Same.
// However, For Diffrent Browsers ON The Same Machine The Session Id Will Vary.
app.get(`/reqcount`, (req,res) => {
    if (!req.session.count) req.session.count = 1; // Initializing Our Own Variables Inside Session Object
    else req.session.count += 1;
    res.send(`You Sent A Request ${req.session.count} Times On This Path`);
})


// During Production Phase We Can't Use This Temporary Store As This Can't Hold Large Amount Of Data.
// For Production We Use Temporary Stores That Are Based Upon Databases.

// Flash Messages Are The Messages That Appear For Only Once. For Example Message After Deleting A Listing.
app.get(`/`, (req, res) => {
    console.log(req.signedCookies);
    console.log(req.cookies);
    res.send("Test Successfull!!!");
});


// Here, In The Below Example We Are Storing The Name Variable In Express Sessions And Using It In A Diffrent Route.
app.get("/register", (req, res) => {
    let {name = "Anonymous"} = req.query;
    req.session.name = name;
    // Creating Flash Messages And Storing Them In Session
    if (req.session.name != "Anonymous") req.flash(`success`, `User Registered Successfully`);
    else req.flash(`error`, `User Registration Unsuccessfull`);
    res.redirect("/hello2");
});
app.get("/hello1", (req,res) => { // Method 01 Of Using Flash Messages
    // Sending Flash Message With Pages
    // Here The Message Will be Displayed Only Once
    res.render(`page.ejs`, {name : req.session.name, msg : req.flash(`success`)});
});
app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});
app.get("/hello2", (req,res) => { // Method 02 Of Using Flash Messages
    // Using Locals Property of Result Object
    // With Locals We Can Assign Variables That Are Directly Accessible By Rendered Express Template Pages.
    res.locals.name = req.session.name;
    res.render(`page.ejs`);
});