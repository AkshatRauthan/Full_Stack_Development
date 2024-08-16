// Creating A Basic Chatting App
// Every Chat Will Have An Id, From (Sender), To (Receiver), Message, Created_At (Date And Time)

const express =  require(`express`);
const app = express();
const mongoose = require(`mongoose`);
const path = require(`path`);
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

main().then(() => console.log(`Connection Successfull`))
.catch((error) => console.log(error));

async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/whatsapp`);
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

app.post(`/chats`, (req, res) => {
    let data = req.body;
    let newChat = new Chat({
        From : data.From,
        To : data.To,
        Message : data.Message,
        CreatedAt : new Date()
    });
    newChat.save().then((result) => {
        console.log(result);
        console.log("Chat Saved Successfully");
        res.redirect(`/chats`);
    }).catch((error) => {
        res.send("Error! Can't Save The Chat");
        throw error;
    });
});

// 03. Edit Route : Editing Existing Chats
app.get(`/chats/:id`, (req, res) => {
    let {id} = req.params;
    Chat.findById(id).then((result) => {
        console.log(result);
        res.render(`editChat.ejs`,{result});
    }).catch((error) => {
        throw error;
    });
});

app.put(`/chats/:id`, (req, res) => {
    let data = req.body, {id} = req.params;
    Chat.findByIdAndUpdate(id, {From : data.From, To : data.To, Message : data.Message}, {new : true}).then((result) => {
        console.log(`Chat Updated`);
        console.log(result);
        res.redirect(`/chats`);
    }).catch((error) => {
        throw error;
    });
});
 
// 04. Destroy Route
app.delete('/chats/:id', (req, res) => {
    let {id} = req.params;
    Chat.findByIdAndDelete(id).then((result) => {
        console.log('\nSuccessfully Deleted The Below Chat : ');
        console.log(result);
        res.redirect(`/chats`);
    }).catch((error) => {
        throw error;
    });
});