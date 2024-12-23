const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    tagName : {
        type : String,
        required : true
    },
    tagIcon : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("Tag", tagSchema);