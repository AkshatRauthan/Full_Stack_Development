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

// {new : true} => Prints The New Updated Value Of The Object Instread The Old One.

User.findOneAndUpdate({Name : "Akshat Rauthan"}, {Name : "Akshat", Age : 21}, {new : true}).then((result) => {
    console.log("\n\nThe Updated Details of Akshat Are As Follows : ");
    console.log(result);
}).catch((error) => {
    throw error;
});

User.findByIdAndUpdate("66b639436adc5c722b299756", {Name : "Khushi Sharma", Email : "khushi123@coeruniversity.ac.in", Age : 19}, {new : true})
.then((result) => {
    console.log("\n\nThe Updated Details of Khushi Are As Follows : ");
    console.log(result);
}).catch((error) => {
    throw error;
});