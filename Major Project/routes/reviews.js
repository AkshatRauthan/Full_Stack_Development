const express = require(`express`);
const router = express.Router({mergeParams : true});
const Listing = require(`../models/listing.js`);
const ExpressError = require(`../utils/expressError.js`);
const wrapAsync = require(`../utils/wrapAsync.js`);
const Review = require(`../models/review.js`);
const { reviewSchema } = require(`../schema.js`);

const validateRatings = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error){
        let errMsg = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }
    else next();
};


// 01. Review Delete Route : For Deleting The Requested Review And Removing It From The Parent Listing.
router.delete(`/:reviewId`, wrapAsync(async (req, res, next) => {
    let {id, reviewId} = req.params;
    let review = await Review.findByIdAndDelete(reviewId);
    Listing.findByIdAndUpdate(id, {$pull :{reviews : reviewId}});
    req.flash("Success", "Deleted Requested Review!");
    res.redirect(`/listings/${req.params.id}`); 
}));

// 02. Review Route : Adding A New Review For An Already Existing Listing
router.post(`/`, validateRatings, wrapAsync(async (req, res, next) => {
    let listing = await Listing.findById(req.params.id);
    let review = new Review(req.body.review);
    listing.reviews.push(review);
    await review.save();
    await listing.save();
    req.flash("Success", "Added New Review!");
    res.redirect(`/listings/${req.params.id}`); 
}));

module.exports = router;