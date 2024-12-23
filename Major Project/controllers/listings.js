const Listing = require(`../models/listing.js`);
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding.js");
const mapToken = process.env.MAP_TOKEN
const geocodingClient = mbxGeocoding({accessToken : mapToken});
const Tag = require("../models/tag.js");

module.exports.index = async (req, res, next) => {
    let result = await Listing.find({}).populate('tags');
    // Command to select the tagName And tagid of all the tags present in the Tag model.
    let tags = await Tag.find({});
    res.render(`listings/index.ejs`, {result, tags});
};


module.exports.renderNewForm = async (req, res) => {
    const tagsData = await Tag.find({});
    res.render('listings/newListing.ejs', {tagsData});
};


module.exports.createListing = async (req, res, next) => {
    const newListing  = new Listing(req.body.listing);
    // Code to replace all the tagNames in req.body.listing.tags with their respective tagIds
    let tags = [];
    for (let tag of req.body.listing.tags){
        let tagData = await Tag.findOne({tagName :  tag});
        tags.push(tagData._id);
    }
    newListing.tags = tags;
    const response = await geocodingClient.forwardGeocode({
        query : `${newListing.location}, ${newListing.country}`,
        limit : 1
    }).send()
    const {path, filename} = req.file;
    newListing.geometry = response.body.features[0].geometry;
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
    let listing = await Listing.findById(id).populate("tags");
    const tagsData = await Tag.find({});
    if (!listing){
        req.flash(`error`, `The Requested Listing Doesn't Exists!`);
        return res.redirect(`/listings`);
    }
    let url = listing.image.url;
    url = url.replace("/upload", "/upload/w_450");
    res.render(`listings/update.ejs`, {listing, url, tagsData});
};


module.exports.updateListing = async (req, res, next) => {
    const {id} = req.params;
    let tags = [];
    for (let tag of req.body.listing.tags){
        let tagData = await Tag.findOne({tagName :  tag});
        tags.push(tagData._id);
    }
    req.body.listing.tags = tags;
    const response = await geocodingClient.forwardGeocode({
        query : `${req.body.listing.location}, ${req.body.listing.country}`,
        limit : 1
    }).send()
    req.body.listing.geometry = response.body.features[0].geometry;
    const listing = await Listing.findByIdAndUpdate(id, req.body.listing);
    console.log(listing);
    if (req.file){
        const {path, filename} = req.file;
        listing.image = {url : path, filename};
        await listing.save();
    }
    req.flash("success", "Updated Requested Listing!");
    res.redirect(`/listings/${id}`);
};


module.exports.deleteListing = async (req, res, next) => {
    const {id} = req.params;
    await Listing.findByIdAndDelete(id)
    req.flash("success", "Requested Listing Deleted!");
    res.redirect(`/listings`);
};


module.exports.searchListing = async (req, res, next) => {
    const {location} = req.body;
    console.log(location);
    let result = await Listing.find({$or : [{location : location}, {country : location}]}).populate('tags');
    let tags = await Tag.find({});
    if (result.length){
        req.flash(`success`, `All The Listings Available For ${location} Are Below.`);
        res.locals.success = req.flash("success");
        res.render(`listings/index.ejs`, {result, tags});
    }
    else{
        req.flash(`error`, `Oops! No Listing Found For ${location}`);
        res.redirect(`/listings`);
    }
};