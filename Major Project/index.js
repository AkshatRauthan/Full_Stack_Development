const express =  require(`express`);
const app = express();
const ejsMate = require('ejs-mate');
const mongoose = require(`mongoose`);
const path = require(`path`);
const methodOverride = require("method-override");
const Listing = require(`./models/listing.js`);
const Review  =  require(`./models/review.js`);
const ExpressError = require(`./utils/expressError.js`);
const wrapAsync = require(`./utils/wrapAsync.js`);
const joi = require(`joi`);
const { listingSchema, reviewSchema } = require(`./schema.js`);

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine(`ejs`, ejsMate);

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

const validateListings = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error){
        let errMsg = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }
    else next();
};

const validateRatings = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error){
        let errMsg = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }
    else next();
};

// 01. Index Route : Getting Titles Of All The Available Listings  
app.get(`/listings`, wrapAsync(async (req, res, next) => {
    let result = await Listing.find({});
    res.render(`index.ejs`, {result});
}));


// 02. New And Create Route : Adding A New Listing To Our Data
app.get(`/listings/new`, (req, res) => {
    res.render('newListing.ejs');
});
app.post(`/listings`, validateListings, wrapAsync(async (req, res, next) => {
    const newListing  = new Listing(req.body.listing);
    await newListing.save();
    res.redirect(`/listings`);
}));


// 03. Show Route : Getting All The Details Of The Selected Listing
app.get('/listings/:id', wrapAsync(async (req, res, next) => {
    const {id} = req.params;
    let data = await Listing.findById(id).populate("reviews");
    res.render(`show.ejs`, {listing : data});
}));


// 04. Edit And Update Route : Changing The Values Of The Existing Listings
app.get(`/listings/:id/edit`, wrapAsync(async (req, res, next) => {
    const {id} = req.params;
    let result = await Listing.findById(id)
    res.render(`update.ejs`, {result});
}));
app.put(`/listings/:id`, validateListings, wrapAsync(async (req, res, next) => {
    const {id} = req.params;
    await Listing.findByIdAndUpdate(id, req.body.listing);
    res.redirect(`/listings/${id}`);
}));


// 05. Delete Route : Deleting An Already Existing Listing Along With Its All Related Reviews
app.delete('/listings/:id', wrapAsync(async (req, res, next) => {
    const {id} = req.params;
    await Listing.findByIdAndDelete(id)
    res.redirect(`/listings`);
}));


// 06. Review Route : Adding A New Review For An Already Existing Listing
app.post(`/listings/:id/reviews`, validateRatings, wrapAsync(async (req, res, next) => {
    let listing = await Listing.findById(req.params.id);
    let review = new Review(req.body.review);
    listing.reviews.push(review);
    await review.save();
    await listing.save();
    res.redirect(`/listings/${req.params.id}`); 
}));


// 07. Review Delete Route : For Deleting The Requested Review And Removing It From The Parent Listing.
app.delete(`/listings/:id/reviews/:reviewId`, wrapAsync(async (req, res, next) => {
    let {id, reviewId} = req.params;
    let review = await Review.findByIdAndDelete(reviewId);
    Listing.findByIdAndUpdate(id, {$pull :{reviews : reviewId}});
    res.redirect(`/listings/${req.params.id}`); 
}));

// Handling Errors
app.all("*", (req, res, next) => {
    next(new ExpressError(404,"Requested Page Is Not Found!!"));
});

app.use((err, req, res, next) => {
    let {statusCode = 500, message = "Encountered Some Error!"} = err;
    console.log(`\nError Encounered!!! \n${message}!!!`);
    res.status(statusCode).render("error.ejs", {err});
});