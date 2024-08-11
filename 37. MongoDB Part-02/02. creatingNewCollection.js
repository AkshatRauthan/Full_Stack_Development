// Schema defines the shape of the decuments within that collcections

const { name } = require("ejs");
const mongoose = require(`mongoose`);
async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/test`);
}
main()
.then( () => console.log(`\nConnection Successfull\n`))
.catch( err => console.log(err));

const userSchema = new mongoose.Schema({
    Name : String,
    Email : String,
    Age : Number
})

// The Below Command Will Create A New Collection In Our Current Database
// Here Our Model Name Is "User" Therefore, The Name Of The Database Will Be "Users" Its Plural Form.
// Remember : Collection And Database Names Are Case Insensitive In Mongo. So "Users" = "users".

const User = mongoose.model("User", userSchema);