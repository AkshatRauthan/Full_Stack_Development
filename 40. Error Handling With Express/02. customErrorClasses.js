const express = require("express")
const app = express();

//Importing Custonm Error Class
const ExpressError = require('./ExpressError.js');

// Localhost Declaration
app.listen(8080, () => {
    console.log(`\nApp Is Listening On Port 8080\n`);
});

const checkToken = (req, res, next) => {
    let {token}  = req.query;
    if (token === "giveaccess"){
        console.log(`Data Fetched By User With Token : ${token}`);
        next();
    }
    else {
        console.log(`Invalid Token ID : ${token}`);
        throw new ExpressError(401, "ACCESS DENIED!!!!");
    }
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

// Custon Error Handling
app.use((err, req, res, next) => {
    let {status = 500, message = "Some Error Occured"} = err; // Setting Default Value To Deal With Undefined Values
    res.status(status).send(message);
    // Here This Will Generate An Error As We have Send An Error Status Code In res.status()
});