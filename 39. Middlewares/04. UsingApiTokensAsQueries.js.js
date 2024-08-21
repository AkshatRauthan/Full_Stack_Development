const express = require("express")
const app = express();

app.listen(8080, () => {
    console.log(`\nApp Is Listening On Port 8080`);
});

// Defining An Middleware For Checking The Presence Of An API Token In The Request
app.use(`/api`,(req, res, next) => {
    let {token}  = req.query;
    if (token === "giveaccess"){
        console.log(`Data Fetched By User With Token : ${token}`);
        next();
    }
    else{
        console.log(`Invalid Token ID : ${token}`);
        res.send("Access Denied");
    };
});

app.get(`/api`, (req, res) => {
    res.send("Data Sent Successfully!!");
});
