// Creating A Basic Chatting App
// Every Chat Will Have An Id, From (Sender), To (Receiver), Message, Created_At (Date And Time)

const express =  require(`express`);
const app = express();
const mongoose = require(`mongoose`);
const path = require(`path`);
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require(`./ExpressError.js`);

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

main().then(() => console.log(`Connection Successfull`))
.catch((error) => console.log(error));

async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/fakewhatsapp`);
}

app.listen(8080, () => {
    console.log(`\nApp Is Listening On Port 8080`);
});

app.get('/', (req, res) => {
    res.send(`Root Is Working!`);
});

// 01. Index Route : Show All Chats
app.get(`/chats`, asyncWrap(async (req, res) => {
    let chats = await Chat.find();
    console.log("Data Fetched");
    res.render("index.ejs", {chats});
}));

// 02. Create New Route : Create New Chats
app.get(`/chats/new`, (req, res) => {
    res.render(`newChatEntry.ejs`, {});
});
app.post(`/chats`, asyncWrap(async (req, res, next) => {
    let data = req.body;
    let newChat = new Chat({
        From : data.From,
        To : data.To,
        Message : data.Message,
        CreatedAt : new Date()
    });
    result = await newChat.save()
    console.log(result);
    console.log("Chat Saved Successfully");
    res.redirect(`/chats`);
}));

// 03. Show Route : Show An Already Existing Chat
app.get(`/chats/:id`, asyncWrap(async (req, res, next) => {
    let {id} = req.params;
    let result = await Chat.findById(id);
    if (!result){
        next(new ExpressError(500, "Requested Chat Not Found"));
    }
    else res.render("editChat.ejs", {result})
}));

// 04. Edit Route : Editing Existing Chats
app.get(`/chats/:id/edit`, asyncWrap(async (req, res, next) => {
    let {id} = req.params;
    let result = await Chat.findById(id);
    if (!result){
        next(new ExpressError(500, "Requested Chat Not Found"));
    }
    else res.render("editChat.ejs", {result})
}));
app.put(`/chats/:id`, asyncWrap(async (req, res, next) => {
    let data = req.body, {id} = req.params;
    result = await Chat.findByIdAndUpdate(id, {From : data.From, To : data.To, Message : data.Message}, {new : true});
    console.log(`Chat Updated`);
    console.log(result);
    res.redirect(`/chats`);
}));

// 05. Destroy Route
app.delete('/chats/:id', asyncWrap(async (req, res, next) => {
    let {id} = req.params;
    result = await Chat.findByIdAndDelete(id);
    console.log('\nSuccessfully Deleted The Below Chat : ');
    console.log(result);
    res.redirect(`/chats`);
}));

// Defining AsyncWrap Function
function asyncWrap(fn){
    return function(req, res, next){
        fn(req, res, next).catch((err) => next(err))
    }
};

// Error Handling Middleware
app.use((err, req, res, next) => {
    let {status = 500, message = "Some Error Occured"} = err;
    console.log(`${err.name} Found!!!!`);
    res.status(status).send(message);
});