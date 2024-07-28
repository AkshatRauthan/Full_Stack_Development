const express = require("express"), path = require(`path`);;
const app = express(), port = 8080;

app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, "/views"));

app.listen( port, () => {
    console.log(`\nListening On Port ${port}...\n`);
});

app.get(`/`, (req, res) => {
    res.render(`03. home.ejs`);
})

app.get(`/ig`, (req, res) => {
    let username = req.query;
    console.log(username);
    res.render(`03. username.ejs`, username);
})