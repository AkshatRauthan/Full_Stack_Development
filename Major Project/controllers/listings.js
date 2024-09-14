const Listing = require(`../models/listing.js`);


module.exports.index = async (req, res, next) => {
    let result = await Listing.find({});
    res.render(`listings/index.ejs`, {result});
};


module.exports.renderNewForm = (req, res) => {
    res.render('listings/newListing.ejs');
};


module.exports.createListing = async (req, res, next) => {
    const newListing  = new Listing(req.body.listing);
    const {path, filename} = req.file;
    newListing.owner = req.user._id;
    newListing.image = {url : path, filename};
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect(`/listings`);
};


module.exports.showListing = async (req, res, next) => {
    const {id} = req.params;
    let listing = await Listing.findById(id).populate("reviews").populate("owner");
    if (!listing){
        req.flash(`error`, `The Requested Listing Doesn't Exists!`);
        res.redirect(`/listings`);
    }
    res.render(`listings/show.ejs`, {listing});
};


module.exports.renderEditForm = async (req, res, next) => {
    const {id} = req.params;
    let listing = await Listing.findById(id);
    if (!listing){
        req.flash(`error`, `The Requested Listing Doesn't Exists!`);
        return res.redirect(`/listings`);
    }
    res.render(`listings/update.ejs`, {listing});
};


module.exports.updateListing = async (req, res, next) => {
    const {id} = req.params;
    await Listing.findByIdAndUpdate(id, req.body.listing);
    req.flash("success", "Updated Requested Listing!");
    res.redirect(`/listings/${id}`);
};


module.exports.deleteListing = async (req, res, next) => {
    const {id} = req.params;
    await Listing.findByIdAndDelete(id)
    req.flash("success", "Requested Listing Deleted!");
    res.redirect(`/listings`);
};