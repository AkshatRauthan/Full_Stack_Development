const express = require("express");
const app = express();

let port = 8080;

app.listen(port, (req, res) => {
    console.log(`\nApp Is Listening On Port : ${port}`);
})

app.use((req, res) => {
    console.log(`\nRequest Received`);
    // res.send() Sends The Response In JSON Format
    // We Can Even Send HTML Element Object Or Plain HTML Code In Response.
    res.send({
        name:"Akshat Rauthan", age:20, gender:"Male"
    });
});