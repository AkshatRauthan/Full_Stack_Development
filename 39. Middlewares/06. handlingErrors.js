const express = require("express")
const app = express();

app.listen(8080, () => {
    console.log(`\nApp Is Listening On Port 8080`);
});

const checkToken = (req, res, next) => {
    let {token}  = req.query;
    if (token === "giveaccess"){
        console.log(`Data Fetched By User With Token : ${token}`);
        next();
    }
    else{
        console.log(`Invalid Token ID : ${token}`);
        throw new Error("ACCESS DENIED!!!!");           // Sending User Defined Error
    };
}

app.get(`/api`, checkToken, (req, res) => {
    res.send("Data Sent Successfully!!");
});
