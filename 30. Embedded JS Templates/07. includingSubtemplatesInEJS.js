const express = require("express"), path = require(`path`);
const app = express(), port = 8080;
const instaData = require(`./06. data.json`);

app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, "/views"));

app.listen( port, () => {
    console.log(`\nListening On Port ${port}...\n`);
});

app.get(`/ig/:username`, (req, res) => {
    let {username} = req.params;
    let data = instaData[username];
    if (data) res.render(`07. instaAccount.ejs`, {data});
    else res.render(`07. accountNotFound.ejs`, {username});
});
