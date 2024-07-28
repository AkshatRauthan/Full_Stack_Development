const express = require("express"), path = require(`path`);;
const app = express(), port = 8080;

app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, "/views"));

// Interolation Refers To Embedding Expressions Into Marked Up Texts.
// Here We Will Embed Expressions Into Our EJS Templates To Make Them Dynamic And Reusable.
// In Our EJS Templates We Can Embed Anything From Variables To Whole HTML Codes.

app.listen( port, () => {
    console.log(`\nListening On Port ${port}...\n`);
})

app.get(`/`, (req, res) => {
    res.render(`02. home.ejs`);
});

app.get(`/rolldice`, (req, res) => {
    let diceVal = Math.floor(Math.random()*6) + 1;
    res.render(`02. rolldice.ejs`, {diceVal});
});