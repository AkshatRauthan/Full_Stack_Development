const express = require("express"), path = require(`path`);;
const app = express(), port = 8080;

app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, "/views"));

app.listen( port, () => {
    console.log(`\nListening On Port ${port}...\n`);
});

app.get(`/`, (req, res) => {
    res.render(`04. rolldice.ejs`);
})
