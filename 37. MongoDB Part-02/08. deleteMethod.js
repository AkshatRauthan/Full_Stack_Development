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
});
const User = mongoose.model("User", userSchema);

// Using deleteOne() Method
User.deleteOne({Name : "Sharma"}).then((result) => {
    console.log("\n\nThe Account With Name Shraddha Deleted");
    console.log(result);
}).catch((error) => {
    throw error;
});

// Using deleteMany() Method
User.deleteMany({Age : {$lt : 18}}).then((result) => {
    console.log("\n\nDeleted All The Accounts With Age Less Than 18");
    console.log(result);
}).catch((error) => {
    throw error;
});

// We Can Also Use findByIdAndDelete() And findOneAndDelete()