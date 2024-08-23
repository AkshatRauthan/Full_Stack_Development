const express = require("express")
const app = express();

app.listen(8080, () => {
    console.log(`\nApp Is Listening On Port 8080\n`);
});

const checkToken = (req, res, next) => {
    let {token}  = req.query;
    if (token === "giveaccess"){
        console.log(`Data Fetched By User With Token : ${token}`);
        next();
    }
    console.log(`Invalid Token ID : ${token}`);
    throw new Error("ACCESS DENIED!!!!");           // Sending User Defined Error
}

app.get(`/api`, checkToken, (req, res) => {
    res.send("Data Sent Successfully!!");
});

app.get(`/`, (req, res) => {
    res.send("Hi!! I'm Root");
})

app.get(`/error`, (req,res) => {
    abcd = abcd;
});

// Using Error Handling Middleware

app.use((err, req, res, next) => {
    console.log("\n----------| ERROR |----------\n");
    next(err);  
    // This Means That The Control From Here Will Go To Any Other Middleware That Can Handle This Error
    // Which Is The Default Error Handling Middlewares Of Express In This Case
});

app.use((req, res) => {
    res.send("Page Not Found!!!");
});

// next() Will Call The Next Non-Error Handling Middleware
// next(error) Will Call The Next Error Handling Middleware