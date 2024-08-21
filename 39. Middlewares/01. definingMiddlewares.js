// Middlewares : These Are Functions That Are Present Between API Requests And Responses.
// For Ex : methodOverride, bodyParser, express.Static, express.urlencoded [app.use(x) Means Run Func. x For All API Requests]

// Some Important Properties Of Middlewares Are :
// 1) They Can Access And Modify Both Request And Response Object.
// 2) Multiple Middlewares Can Be Chained Together One After Another.
// 3) They Can Even Send Responses Themselves, But In These Cases Other Middlewares That COmes After It Along With Our 
//    Predefined API Code Will Not Be Executed.
// 4) At The End A Middleware Has Two Choices : Either Send A Response Or Call An (Another Middleware)/(Next Function).

const express = require("express")
const app = express();

app.listen(8080, () => {
    console.log(`App Is Listening On Port 8080`);
});

// Defining Middlewares : They Will Word Even If The Requested Path Do Not Exists.
app.use((req, res, next) => {
    console.log(`\nHello My Friend!\nI'm The First Middleware!!!!`);
    return next();
});
app.use((req, res, next) => {
    console.log(`Hello My Friend!\nI'm The Second Middleware!!!!`);
    if (Math.random() > 0.5)  res.send(`Boooom!!!!! Your Request Is Destroyed...`);
    return next();
});

// Handling Requests
app.get('/', (req, res) => {
    res.send(`Home Page`);
});

app.get(`/random`, (req, res) => {
    res.send(`The Random Number Is ${Math.floor(Math.random()*10) + 1} `);
});