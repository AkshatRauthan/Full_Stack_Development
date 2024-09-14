const Review = require(`../models/review.js`);
const Listing = require(`../models/listing.js`);


module.exports.deleteReview = async (req, res, next) => {
    let {id, reviewId} = req.params;
    let review = await Review.findByIdAndDelete(reviewId);
    Listing.findByIdAndUpdate(id, {$pull :{reviews : reviewId}});
    req.flash("success", "Deleted Requested Review!");
    res.redirect(`/listings/${req.params.id}`); 
};


module.exports.addReview = async (req, res, next) => {
    let listing = await Listing.findById(req.params.id);
    let review = new Review(req.body.review);
    review.authorName = req.user.username;
    review.author = req.user._id;
    listing.reviews.push(review);
    await review.save();
    await listing.save();
    req.flash("success", "Added New Review!");
    res.redirect(`/listings/${req.params.id}`); 
};