const express = require("express")
const app = express();

app.listen(8080, () => {
    console.log(`\nApp Is Listening On Port 8080`);
});

// Creating Specific Middlewares
app.use(`/random/`, (req, res, next) => {
    console.log("I'm The Middleware For Random ");
    next();
});

// Handling Requests
app.get('/', (req, res) => {
    res.send(`Home Page`);
});

app.get(`/random`, (req, res) => {
    res.send(`The Random Number Is ${Math.floor(Math.random()*10) + 1} `);
});

// Adding Middleware For Sending Respose Upon Calling An Non Existing Page
app.use((req, res) => {
    res.status(404).send("The Requested Page Do Not Exists!!!");
});