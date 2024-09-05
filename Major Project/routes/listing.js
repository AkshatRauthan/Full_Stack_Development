const express = require(`express`);
const router = express.Router();
const Listing = require(`../models/listing.js`);
const ExpressError = require(`../utils/expressError.js`);
const wrapAsync = require(`../utils/wrapAsync.js`);
const { listingSchema } = require(`../schema.js`);

const validateListings = (req, res, next) => {
    let { error } = listingSchema.validate(req.body);
    if (error){
        let errMsg = error.details.map((el) => el.message).join(", ");
        throw new ExpressError(400, errMsg);
    }
    else next();
};


// 01. Index Route : Getting Titles Of All The Available Listings  
router.get(`/`, wrapAsync(async (req, res, next) => {
    let result = await Listing.find({});
    res.render(`index.ejs`, {result});
}));


// 02. New And Create Route : Adding A New Listing To Our Data
router.get(`/new`, (req, res) => {
    res.render('newListing.ejs');
});
router.post(``, validateListings, wrapAsync(async (req, res, next) => {
    const newListing  = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect(`/listings`);
}));


// 03. Show Route : Getting All The Details Of The Selected Listing
router.get('/:id', wrapAsync(async (req, res, next) => {
    const {id} = req.params;
    let listing = await Listing.findById(id).populate("reviews");
    if (!listing){
        req.flash(`error`, `The Requested Listing Doesn't Exists!`);
        res.redirect(`/listings`);
    }
    res.render(`show.ejs`, {listing});
}));


// 04. Edit And Update Route : Changing The Values Of The Existing Listings
router.get(`/:id/edit`, wrapAsync(async (req, res, next) => {
    const {id} = req.params;
    let listing = await Listing.findById(id)
    if (!listing){
        req.flash(`error`, `The Requested Listing Doesn't Exists!`);
        res.redirect(`/listings`);
    }
    res.render(`update.ejs`, {listing});
}));
router.put(`/:id`, validateListings, wrapAsync(async (req, res, next) => {
    const {id} = req.params;
    await Listing.findByIdAndUpdate(id, req.body.listing);
    req.flash("success", "Updated Requested Listing!");
    res.redirect(`/listings/${id}`);
}));


// 05. Delete Route : Deleting An Already Existing Listing Along With Its All Related Reviews
router.delete('/:id', wrapAsync(async (req, res, next) => {
    const {id} = req.params;
    await Listing.findByIdAndDelete(id)
    req.flash("success", "Requested Listing Deleted!");
    res.redirect(`/listings`);
}));

module.exports = router;