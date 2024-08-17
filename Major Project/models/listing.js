const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const defaultImage = 
"https://images.unsplash.com/photo-1625505826533-5c80aca7d157?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGdvYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60";

const listingSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    image :{
            type : String,
            set: (link) => link === "" ? defaultImage : link,
            default : defaultImage
    },
    price : {
        type : Number
    },
    location : {
        type : String
    },
    country : {
        type : String
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;