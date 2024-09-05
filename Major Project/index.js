const express =  require(`express`);
const app = express();
const ejsMate = require('ejs-mate');
const mongoose = require(`mongoose`);
const path = require(`path`);
const methodOverride = require("method-override");
const ExpressError = require(`./utils/expressError.js`);
const listings = require(`./routes/listing.js`);
const reviews = require(`./routes/reviews.js`);
const session = require(`express-session`);
const flash = require(`connect-flash`);

const sessionOptions = {
    secret: "mySuperSecretIsWhomITrulyAm",
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


async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/wanderlust`);
}

main().then(() => console.log(`Connection Successfull`))
.catch((error) => console.log(error));

app.listen(8080, () => {
    console.log(`\nThe App Is Listenig On Port 8080`);
});

app.get('/', (req, res) => {
    res.send('The App Is Working');
});

app.use((req, res, next) => {
    res.locals.success = req.flash("Success");
    res.locals.error = req.flash("Error");
    next();
});

app.use(`/listings/:id/reviews`, reviews);
app.use(`/listings`, listings);


// Handling Errors
app.all("*", (req, res, next) => {
    next(new ExpressError(404,"Requested Page Is Not Found!!"));
});

app.use((err, req, res, next) => {
    let {statusCode = 500, message = "Encountered Some Error!"} = err;
    console.log(`\nError Encounered!!! \n${message}!!!`);
    res.status(statusCode).render("error.ejs", {err});
});