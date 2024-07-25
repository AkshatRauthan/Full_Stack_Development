const express = require(`express`);
const app = express();
let port = 8080;
app.listen(port, () => {
    console.log(`\nApp Is Listnening On The Port : ${port}\n`);
});

// Handling Request Through app.use() Method :
app.use((req, res) => {
    console.log(`Request Received`);
});