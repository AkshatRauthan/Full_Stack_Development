const express = require("express");
const app = express();
let port = 8080;
app.listen(port, (req, res) => {
    console.log(`\nApp Is Listening On Port : ${port}`);
})

// The Variable Values Passed In The Path Of The page Are Called Path Parameters

app.get(`/`, (req, res) => {
    console.log(`Hello! I Am Root`);
})

// Below :userneme Tells Here That username Is A Path Parameter
// And Its Value will Be Stored In The Response Object.
app.get(`/:username`, (req, res) => {
    console.log(req.params);
    let response = `<br><br><h1 style="text-align:center">
    Welcome To The Account Of ${req.params.username}</h1>`;
    res.send(response);
});
