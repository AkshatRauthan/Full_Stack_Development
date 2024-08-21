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
        res.send("Access Denied");
    };
}

const firstMiddleware = (req, res, next) => {
    console.log(`I'm The First Middleware\n`);
    next();
}

// In This Way We Can Directly Pass Multiple Middlewares Fo=r request Authentication

app.get(`/api`,firstMiddleware, checkToken, (req, res) => {
    res.send("Data Sent Successfully!!");
});
