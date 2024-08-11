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

//Using updatemany() Method
User.updateMany ({Age : {$lt : 50}}, {Age : 50}).then((result) => {
    console.log("\n\nAge Updated To 50 For All Users With Age Less Than 50");
    console.log(result);
});


// Using updateOne() Method => First Update Fields Condition Then Update Column's Data
User.updateOne({Name : "Shashikant"}, {Name : "Shaski"}).then((result) => {
    console.log("\n\nName Changed Succesfully");
    console.log(result)
});