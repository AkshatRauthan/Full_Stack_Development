const mongoose = require(`mongoose`);
async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/amazon`);
}
main()
.then( () => console.log(`\nConnection Successfull\n`))
.catch( err => console.log(err));

// Schema Validation => Applying Constraints On The Fields Of Our Collections.

const bookSchema = new mongoose.Schema({
    Title : {
        type : String,
        required : true,
        maxLength : 25
    },
    Author : {
        type : String
    },
    Price : {
        type : Number,
        min: [100, `Price Too Low For Product. `]  // Defining Custom Error
    },
    Discount : {
        type : String,
        enum : ["5%", "10%", "15%", "20%", "25%", "33%"] // Field Can't Have Values Absent In The Array
    },
    Genre : {
        type : [String] // Array Of Strings
    },
    Description : {
        type : String,
        default : "Description Not Available!",
        maxLength : 150
    }
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    Title  : "Harry Potter",
    Author : "J. K. Rowling",
    Parts  : 7
});

let book2 = new Book({
    Title  : "Lord of The Rings",
    Author : "Tolokein",
    Parts  : 3
});

let book3 = new Book({
    Title  : "The Hobbit",
    Author : "Tolokein",
    Parts  : 1
})

book1.save().then(() => {
    console.log("\nSuccesfully Saved Book1")
    console.log(book1);
});

book2.save().then(() => {
    console.log("\nSuccesfully Saved Book2")
    console.log(book2);
});

book3.save().then(() => {
    console.log("\nSuccesfully Saved Book3")
    console.log(book3);
});

// Normal Updations Do Not Follow Schema Validations

// Updating Data According Schema Validations 
Book.findByIdAndUpdate("66b8e6b1b2734a932d8f536b", {Price : -1200}, {runValidators : true}).then((result) => {
    console.log(`\nThe Book Was Updated Succesfully`);
    console.log(result);
}).catch((error) => {
    console.log("\nError While Updation.");
    console.log(error.errors.Price.properties.message);
});