if (process.env.Node_ENV != "production"){
    require('dotenv').config();
}

const mongoose = require(`mongoose`);
let {testData, tagsData} = require(`./data.js`);
const Listing = require(`../models/listing.js`);
const Tag = require(`../models/tag.js`);
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding.js");
const mapToken = process.env.MAP_TOKEN
const geocodingClient = mbxGeocoding({accessToken : mapToken})

async function main(){
    await mongoose.connect(process.env.MONGO_ATLAS_URL);
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

async function initializeTagDB(){
    await Tag.deleteMany({});
    await Tag.insertMany(tagsData);
    console.log("Tag Database Is Initialized");
}

async function setupTestData(){
    await initializeTagDB();
    await addCoordinates();
    await Listing.deleteMany({});
    let tagArr = await Tag.find({});
    let tagId = {};
    for (let i=0; i<tagArr.length; i++) tagId[tagArr[i].tagName] = tagArr[i]._id;
    console.log("\nTag Data : \n");
    console.log(tagArr);
    console.log("\nTag Object : \n");
    console.log(tagId);
    testData = testData.map((obj) => ({...obj, tags : obj.tags.map((name) => tagId[name])}));
    testData = testData.map((obj) => ({...obj, owner:'672e503270c08ad0f3ceaa73'}));
    await Listing.insertMany(testData);
    console.log(testData);
    console.log(`The Database Is Initialized With The Test Data`);
}

setupTestData();