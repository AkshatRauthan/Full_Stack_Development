const express = require(`express`);
const router = express.Router();
const wrapAsync = require(`../utils/wrapAsync.js`);
const {isLoggedIn, isOwner, validateListings} = require(`../middlewares.js`);
const methodOverride = require("method-override"); 
const listingController = require(`../controllers/listings.js`);
const app = express();
app.use(methodOverride("_method"));
const multer = require(`multer`);
const {storage} = require('../cloudConfig.js');
const upload = multer({ storage });


router.route(`/`)
// 01. Index Route : Displaying All The Available Listings  
.get( wrapAsync(listingController.index))

// 02. Create Route : Creating A New Listing
.post( isLoggedIn, upload.single(`listing[image]`), validateListings, wrapAsync(listingController.createListing));



// 03. New Route : Opening Form To Create A New Listing
router.get(`/new`, isLoggedIn, listingController.renderNewForm);



router.route(`/:id`)
// 04. Show Route : Getting All The Details Of The Selected Listing
.get( wrapAsync(listingController.showListing))

// 05. Update Route : Updating An Existing Listing
.put( isLoggedIn, upload.single(`listing[image]`), validateListings, wrapAsync(listingController.updateListing))

// 06. Delete Route : Deleting An Already Existing Listing Along With Its All Related Reviews
.delete( isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));



// 07. Edit Route : Opening Form To Update Existing Listing
router.get(`/:id/edit`, isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));


module.exports = router;