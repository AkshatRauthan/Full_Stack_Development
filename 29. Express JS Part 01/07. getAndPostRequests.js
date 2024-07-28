const express = require(`express`), port = 8080;
const app = express();

app.use(express.urlencoded({extended : true}));
appp.use(express.json());

app.listen(port, () => {
    console.log(`\nListening On Port : ${port}`);
});

app.get(`/register`, (req, res) => {
    console.log(`Accepted GET Request`);
    console.dir(req);
    res.send(`Standard GET Response`);
});

app.post(`/register`, (req, res) => {
    let data = req.body;
    console.log(data);
    res.send(`<h2>Standard POST Response <br> Hello ${data.Username }!</h2>`);
});