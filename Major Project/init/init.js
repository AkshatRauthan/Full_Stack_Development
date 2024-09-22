if (process.env.Node_ENV != "production"){
    require('dotenv').config();
}

const mongoose = require(`mongoose`);
let testData = require(`./data.js`);
const Listing = require(`../models/listing.js`);
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding.js");
const mapToken = process.env.MAP_TOKEN
const geocodingClient = mbxGeocoding({accessToken : mapToken})

testData = testData.data;

async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/wanderlust`);
}

main().then(() => console.log(`Connection Successfull`))
.catch((error) => console.log(error));

async function addCoordinates(){
    for (obj of testData){
        const response = await geocodingClient.forwardGeocode({
            query : `${obj.location}, ${obj.country}`,
            limit : 1
        }).send()
        obj.geometry = response.body.features[0].geometry;
    }
}

async function initializeDB(){
    await addCoordinates();
    await Listing.deleteMany({});
    testData.data = testData.map((obj) => ({...obj, owner:'66e1361428fe43fd1034dec1'}));
    await Listing.insertMany(testData.data);
    console.log(`The Database Is Initialized With The Test Data`);
}

initializeDB();