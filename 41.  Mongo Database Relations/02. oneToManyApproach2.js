// One To Many Relation : When A Single Set Of Values From One Collection Relates To Many Set of Values Of Other Collection.
 
// Case 2 : One To Many
// When The Number Of Related Data Objects Present In The Parent Object Is Very Large.


// Implementation : Store A Reference To The Child Document Inside Parent.
// Here We Will Simply Create An Another Collection For Our Child Objects And Store Their Reference In Our Parent Object.

// For ex : Order Details Of Customers Along With Their Own Data For Services Like Swiggy.
// We Will Create Saperate Collections For User Details And Orders. And Inside User Details Add An Array Named Orders Where
// We Will Store The References Of All The Orders Placed (By The User) That Are Present In Orders Collection.


const mongoose = require(`mongoose`);
const {Schema} = mongoose;

main().then(() => console.log(`\nConnection Successfull\n`))
.catch((error) => console.log(error));

async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/relationsDemo`);
};

// Adding Orders
const orderSchema = new Schema({
    itemName : String,
    price : Number,
});
const Order = mongoose.model("Order", orderSchema);
const addOrders = async () => {
    console.log(await Order.insertMany([
        { itemName : "Samosa", price : 12},
        { itemName : "chips", price : 15},
        { itemName : "Chocolate", price : 40}
    ]));
};

// Adding Customers
const customerSchema = new Schema({
    name : String,
    orders : [{
        type : Schema.Types.ObjectId,
        ref : "Order"
    }]
});
const Customer = new mongoose.model("Customer", customerSchema);
const addCustomers = async() => {
    let customer1 = new Customer({
        name : "Akshat",
    });

    let data = await Order.find({});
    for (obj of data){
        customer1.orders.push(obj);
    }

    await customer1.save()
};

const findCustomers = async() => {
    // Retriving All The Data With The Order Id's replaced With Their Corresponding Data Object.
    let result = await Customer.find({}).populate("orders");    // Orders Here Specify The Data Field To Populate.
    for (customers of result) console.log(customers);
};

// addOrders();
// addCustomers();
findCustomers();