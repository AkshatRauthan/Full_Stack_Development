const express = require("express");
const app = express();
let port = 8080;
app.listen(port, (req, res) => {
    console.log(`\nApp Is Listening On Port : ${port}`);
})

// Used To Send Response For A Particular Path
app.get(`/`, function(req, res){
    res.send(`Contacted Root Path`);
});

app.get(`/home`, function(req, res){
    res.send(`Contacted Home Path`);
});

app.get(`/search`,function(req, res){
    res.send(`Contacted Search Path`);
});

// In Case Of Any Other Path Other Than Those Specefied Above
app.get(`*`, function(req, res){
    throw `Error 404! The Requested Page Do Not Exist`;
});

// We Can Even Use All Of The Above Statements With app.post() To Handle Post Requests.