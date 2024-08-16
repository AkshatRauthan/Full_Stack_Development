const express =  require(`express`);
const app = express();
const mongoose = require(`mongoose`);
const path = require(`path`);
const methodOverride = require("method-override");
const Listing = require(`./models/listing.js`);

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/wanderlust`);
}

main().then(() => console.log(`Connection Successfull`))
.catch((error) => console.log(error));

app.listen(8080, () => {
    console.log(`\nThe App Is Listenig On Port 8080`);
});

app.get('/', (req, res) => {
    console.log('The App Is Working');
    res.send('The App Is Working');
});

// 01. Index Route : Getting Titles Of All The Available Listings  
app.get(`/listings`, (req, res) => {
    Listing.find({}).then((result) => {
        console.log(`Fetched All The Data`);
        res.render(`index.ejs`, {result});
    }).catch((error) => {
        throw error;
    });
});

// 02. New And Create Route : Adding A New Listing To Our Data
app.get(`/listings/new`, (req, res) => {
    res.render('newListing.ejs');
});

app.post(`/listings`, (req, res) => {
    const newListing  = new Listing(req.body.listing);
    console.log(newListing); 

    newListing.save().then((result) => {
        console.log(`New Listing Added`);
        console.log(result);
        res.redirect(`/listings`);
    }).catch((error) => {
        throw error;
    });
});

// 03. Show Route : Getting All The Details Of The Selected Listing
app.get('/listings/:id', (req, res) => {
    const {id} = req.params;
    Listing.findById(id).then((data) => {
        res.render(`show.ejs`, {listing : data});
    }).catch((error) => {
        throw error;
    });
});

// 04. Edit And Update Route : Changing The Values Of The Existing Listings
app.get(`/listings/:id/edit`, (req, res) => {
    const {id} = req.params;
    Listing.findById(id).then((result) => {
        res.render(`update.ejs`, {result});
    }).catch((error) => {
        throw error;
    });
});

app.put(`/listings/:id`, (req, res) => {
    const {id} = req.params;
    Listing.findByIdAndUpdate(id, req.body.listing, {new : true}).then((result) => {
        console.log(`The Listing Is updated Successfully`);
        console.log(result);
        res.redirect(`/listings/${id}`);
    }).catch((error) => {
        throw error;
    });
});

// 05. Delete Route : Deleting An Already Existing Listing
app.delete('/listings/:id', (req, res) => {
    const {id} = req.params;
    Listing.findByIdAndDelete(id).then(() => {
        console.log("Deleted The Requested Listing");
        res.redirect(`/listings`);
    }).catch((error) => {
        throw error;
    });
});