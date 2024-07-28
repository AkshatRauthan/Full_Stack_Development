const express = require("express"), path = require(`path`);;
const app = express(), port = 8080;

app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, "/views"));

// The Above Line Says That The Path Of views Folder Is : __dirname/views
// Where __dirname Is The Location Of The Current JS File.

app.listen( port, () => {
    console.log(`\nListening On Port ${port}...\n`);
})

app.get(`/`, (req, res) => {
    res.render(`01. home.ejs`);
});