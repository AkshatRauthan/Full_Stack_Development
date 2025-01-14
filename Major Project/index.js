if (process.env.Node_ENV != "production"){
    require('dotenv').config();
}

const express =  require(`express`);
const app = express();
const ejsMate = require('ejs-mate');
const mongoose = require(`mongoose`);
const path = require(`path`);
const methodOverride = require("method-override");
const ExpressError = require(`./utils/expressError.js`);
const listingRouter = require(`./routes/listing.js`);
const reviewRouter = require(`./routes/reviews.js`);
const userRouter = require(`./routes/user.js`);
const session = require(`express-session`);
const MongoStore = require('connect-mongo');
const flash = require(`connect-flash`);
const passport = require(`passport`);
const LocalStrategy = require('passport-local');
const User = require('./models/user.js');
const multer = require(`multer`);

const store = MongoStore.create({
    mongoUrl : process.env.MONGO_ATLAS_URL,
    crypto : {
        secret: process.env.SECRET
    },
    touchAfter : 24 * 60 * 60
})

const sessionOptions = {
    store : store,
    secret: process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 1000, // Expiry Date : 7 Days After Their Date Of Creation
        maxAge : 7 * 24 * 60 * 1000,
        httpOnly : true,
    },
};

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine(`ejs`, ejsMate);
app.use(session(sessionOptions));
app.use(flash());

// Implementing Local Strategy For Authentication For Indivisual Sessions
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

async function main(){
    await mongoose.connect(process.env.MONGO_ATLAS_URL);
}

main().then(() => console.log(`Connection Successfull`))
.catch((error) => console.log(error));

app.listen(8080, () => {
    console.log(`\nThe App Is Listenig On Port 8080`);
});

// Adding Our Flash Messages In Session Object And Making Them Acessible For All Routes
// By Storing Them In As Variables In The locals Object Of Request.
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    // console.log('\nThe URL Requested Is : ',req.url);
    next();
});

app.use(`/listings/:id/reviews`, reviewRouter);
app.use(`/listings`, listingRouter);
app.use(`/`, userRouter);


// Handling Errors
app.use((req, res, next) => {
    if (req.url == "/favicon.ico") next();
    else next(new ExpressError(404,"Requested Page Is Not Found!!"));
});

app.use((err, req, res, next) => { 
    console.log(err);
    let {statusCode = 500, message = "Encountered Some Error!"} = err;
    console.log(`\nError Encounered!!! \n${message}!!!`);
    res.status(statusCode).render("error.ejs", {err});
});