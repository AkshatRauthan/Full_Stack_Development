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

const User = mongoose.model("User", userSchema);

User.insertMany([
    {Name : "Tony", Email : "imIronman@avengers.com", Age : 55},
    {Name : "Hulk", Email : "imDrBanner@avengers.com", Age : 50},
    {Name : "Wade", Email : "imDeadpool@XmenToMcu.com", Age : 45},
    {Name : "Hugh", Email : "imWolverine@XmenToMcu.com", Age : 127}
])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    throw error;
});