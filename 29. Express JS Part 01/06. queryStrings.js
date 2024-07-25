const express = require("express");
const app = express();
let port = 8080;
app.listen(port, (req, res) => {
    console.log(`\nApp Is Listening On Port : ${port}`);
});

// Handling Requests With Query String
// req.query Object Stores All The Queries Passed With The Path
// /search?q=Alan&id=123 ==> {q : "Alan", id : 123}
app.get(`/search`, (req, res) => {
    console.log(req.query);
    res.send(`No Results Found`);
});