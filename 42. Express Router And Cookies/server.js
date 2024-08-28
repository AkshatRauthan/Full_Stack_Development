const express = require('express');
const app = express();
const methodOverride = require("method-override");
const Users = require(`./routes/users.js`);
const Posts = require(`./routes/posts.js`);
const cookieParser = require(`cookie-parser`);
app.use(methodOverride("_method"));

app.listen(8080, () => {
    console.log(`\nServer Is Listening On Port 8080`);
})


app.use(cookieParser("secretcode"));

// Sending Cookies To The Client : 
app.get(`/getcookies`, (req, res) => {  
    res.cookie("greet", "Hello");
    res.cookie("madeIn","India");
    res.cookie("color", "red");
    res.send(`I Just Sent You Some Cookies!`);
})

// Sending Signed Cookies : Signed Cookies Are Cookies That Are Encoded
app.use(`/getsignedcookies`, (req, res) => {
    res.cookie("Made-in", "India", {signed : true});
    res.send(`Signed Cookie Sent`);
})


// Express Router Helps Us To Segregate Common Routes Present In Our Main JS Script File To Make It Less Bulky And
// Easier To Understand.

app.use('/users', Users);
app.use(`/posts`, Posts);

// Reading Signed Cookies : 
// If Only The Data Part is Changed Then The Cookie Will Return False.
// If The Extra Code Present These Cookies Is Tampered Then They Automatically Got Converted Into Unsigned Cookie.
app.get(`/verify`, (req, res) => {
    console.dir(req.signedCookies);
    res.send("verified");
})

// Reading Cookies
app.get(`/`, (req, res) => {
    console.dir(req.cookies);
    res.send(`Hi! I'm Root!`);
})