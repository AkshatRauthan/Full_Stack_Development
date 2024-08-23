const mongoose = require(`mongoose`);
const path = require(`path`);
const chat = require(`./models/chat.js`);
const Chat = require("./models/chat.js");
const { LoremModule } = require("@faker-js/faker");

main().then(() => console.log(`\nConnection Successfull\n`))
.catch((error) => console.log(error));

async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/fakewhatsapp`);
}

let Chats = [
    {
        From : "Akshat",
        To : "Kirti",
        Message : "Movie Dekhne Chalega......",
        CreatedAt : new Date()
    },
    {
        From : "Krit",
        To : "Shashikant",
        Message : "Deadpool Dekhega",
        CreatedAt : new Date()
    },
    {
        From : "Shashikant",
        To : "Krit",
        Message : "Nhi, Tuuu Ja Mene Dekhleee",
        CreatedAt : new Date()
    },
    {
        From : "Neha",
        To : "Preeti",
        Message : "Tu Abhi Kiske Saath Ha, Tum Dono Ko Tere Papa Ne Dekh Liya ",
        CreatedAt : new Date()
    },
    {
        From : "Rohit",
        To : "Mohit",
        Message : "Abbe Ye Kya H, Ball Thoda Short Rakhn Na",
        CreatedAt : new Date()
    },
    {
        From : "Rohit",
        To : "Virat",
        Message : "Dhoni Bhai Kah Rahe, Trophy To Jeet Gye Ha Abb Jaldi Retirement Lee Loo",
        CreatedAt : new Date()
    },
    {
        From : "Kohli",
        To : "Rohit",
        Message : "Vaase Baat To Sahe Ha, Kam See Kam Kahe See To Gautam Se Peecha Chute....",
        CreatedAt : new Date()
    },
    {
        From : "Thor",
        To : "Thanos's Army",
        Message : "Bring Me Thanos!!!!",
        CreatedAt : new Date()
    },
    {
        From : "Deadpool",
        To : "MCU",
        Message : "Why Was Thor Crying?????",
        CreatedAt : new Date()
    }
];

Chat.insertMany(Chats).then((result) => {
    console.log("\nData Entered Succesfully\n");
}).catch ((error) => {
    throw error;
});