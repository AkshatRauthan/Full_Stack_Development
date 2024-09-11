const express = require(`express`);
const router = express.Router({mergeParams : true});
const Listing = require(`../models/listing.js`);
const wrapAsync = require(`../utils/wrapAsync.js`);
const Review = require(`../models/review.js`);
const {isLoggedIn, isOwner, isAuthor, validateRatings} = require(`../middlewares.js`);


// 01. Review Delete Route : For Deleting The Requested Review And Removing It From The Parent Listing.
router.delete(`/:reviewId`, isLoggedIn, isAuthor, wrapAsync(async (req, res, next) => {
    let {id, reviewId} = req.params;
    let review = await Review.findByIdAndDelete(reviewId);
    Listing.findByIdAndUpdate(id, {$pull :{reviews : reviewId}});
    req.flash("success", "Deleted Requested Review!");
    res.redirect(`/listings/${req.params.id}`); 
}));

// 02. Review Route : Adding A New Review For An Already Existing Listing
router.post(``, validateRatings, isLoggedIn, wrapAsync(async (req, res, next) => {
    let listing = await Listing.findById(req.params.id);
    let review = new Review(req.body.review);
    review.authorName = req.user.username;
    review.author = req.user._id;
    listing.reviews.push(review);
    console.log(review);
    await review.save();
    await listing.save();
    req.flash("success", "Added New Review!");
    res.redirect(`/listings/${req.params.id}`); 
}));

module.exports = router;