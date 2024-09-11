const Listing = require(`./models/listing.js`)
const Review = require(`./models/review.js`)
const { listingSchema } = require(`./schema.js`);
const { reviewSchema } = require(`./schema.js`);
const ExpressError = require(`./utils/expressError.js`);

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You Must Be Logged In As A User First!");
        res.redirect("/login");
    }
    else next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req, res, next) => {
    const {id} = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash('error', `You Don't Have The Permission To Update Or Delete This Listing.`);
        return res.redirect(`/listings/${id}`);
    }
    else next();
}

module.exports.isAuthor = async (req, res, next) => {
    const {id, reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author._id.equals(res.locals.currUser._id)){
        req.flash('error', `You Don't Have The Permission To Delete This Review.`);
        return res.redirect(`/listings/${id}`);
    }
    else next();
}

module.exports.validateListings = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error){
        let errMsg = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }
    else next();
};

module.exports.validateRatings = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error){
        let errMsg = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }
    else next();
};