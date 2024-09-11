const mongoose = require(`mongoose`);
const Review = require(`./review.js`)
const Schema = mongoose.Schema;
const defaultImage = 
"https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60";

const listingSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    image :{
            type : String,
            set: (link) => link === "" ? defaultImage : link,
            default : defaultImage
    },
    price : {
        type : Number,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    reviews : [{
        type : Schema.Types.ObjectId,
        ref : "Review"
    }],
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User",
    }
});


// Mongoose Middleware for Deleting All The Reviews In Case The Parent Listing Is Deleted.
listingSchema.post(`findOneAndDelete`, async (listing) => {
    if (listing) await Review.deleteMany({_id : {$in : listing.reviews}});
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;