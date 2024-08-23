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
    console.log(`App Is Listening On Port 8080`);
});

app.get('/', (req, res) => {
    res.send(`Root Is Working!`);
});

// 01. Index Route : Show All Chats
app.get(`/chats`, async (req, res) => {
    let chats = await Chat.find();
    console.log("Data Fetched");
    res.render("index.ejs", {chats});
});

// 02. Create New Route : Create New Chats
app.get(`/chats/new`, (req, res) => {
    res.render(`newChatEntry.ejs`, {});
});

app.post(`/chats`,async (req, res, next) => {
    try {
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
    }
    catch(error){
        next(error);
    }
});

// 04. Show Route : Show An Already Existing Chat
app.get(`/chats/:id`, async (req, res, next) => {
    try {
        let {id} = req.params;
        let chat = await Chat.findById(id);
        if (!chat){
            next(new ExpressError(500, "Requested Chat Not Found"));
        }
        else res.render("editChat.ejs", {chat});
    }
    catch(error){
        next(error);
    }
});

// 03. Edit Route : Editing Existing Chats
app.get(`/chats/:id/edit`, async (req, res, next) => {
    try {
        let {id} = req.params;
        result = await Chat.findById(id);
        console.log(result);
        res.render(`editChat.ejs`,{result});
    }
    catch(error){
        next(error);
    }
});

app.put(`/chats/:id`,async (req, res, next) => {
    try {
        let data = req.body, {id} = req.params;
        result = await Chat.findByIdAndUpdate(id, {From : data.From, To : data.To, Message : data.Message}, {new : true});
        console.log(`Chat Updated`);
        console.log(result);
        res.redirect(`/chats`);
    }
    catch(error){
        next(error);
    }
});

// 04. Destroy Route
app.delete('/chats/:id', async (req, res, next) => {
    try {
        let {id} = req.params;
        result = await Chat.findByIdAndDelete(id);
        console.log('\nSuccessfully Deleted The Below Chat : ');
        console.log(result);
        res.redirect(`/chats`);
    }
    catch(error){
        next(error);
    }
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    let {status = 500, message = "Some Error Occured"} = err;
    res.status(status).send(message);
});