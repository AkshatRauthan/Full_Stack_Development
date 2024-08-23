const mongoose = require(`mongoose`);

const chatSchema = new mongoose.Schema({
    From : {
        type : String,
        required : true
    },
    To : {
        type : String,
        required : true
    },
    Message : {
        type : String,
        maxLength : 250
    },
    CreatedAt : {
        type : Date,
        required : true
    }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;