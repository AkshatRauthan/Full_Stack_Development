const express = require("express")
const app = express();

app.listen(8080, () => {
    console.log(`\nApp Is Listening On Port 8080`);
});

// Logger Middleware7
app.use((req, res, next) => {
    req.time = new Date(Date.now()).toString().slice(4, 24);
    console.log(`\n${req.method} Request On ${req.path} Over ${req.hostname} On ${req.time}`);
    next(); 
})

// Handling Requests
app.get('/', (req, res) => {
    res.send(`Home Page`);
});

app.get(`/random`, (req, res) => {
    res.send(`The Random Number Is ${Math.floor(Math.random()*10) + 1} `);
});