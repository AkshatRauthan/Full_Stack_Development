const express = require("express"), path = require(`path`);;
const app = express(), port = 8080;

app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, "/views"));

app.listen( port, () => {
    console.log(`\nListening On Port ${port}...\n`);
});

app.get(`/`, (req, res) => {
    res.render(`05. home.ejs`);
})

app.get(`/ig`, (req, res) => {
    let {name} = req.query;
    const followers = ['Akshat', 'Shashikant', 'Yash', 'Krit'];
    res.render(`05. username.ejs`, {name, followers});
});