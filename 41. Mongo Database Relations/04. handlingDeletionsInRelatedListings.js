const mongoose = require(`mongoose`);
const {Schema} = mongoose;

main().then(() => console.log(`\nConnection Successfull`))
.catch((error) => console.log(error));

async function main(){
    await mongoose.connect(`mongodb://127.0.0.1:27017/relationsDemo`);
};
const orderSchema = new Schema({
    itemName : String,
    price : Number,
});
const customerSchema = new Schema({
    name : String,
    orders : [{
        type : Schema.Types.ObjectId,
        ref : "Order"
    }]
});
const Order = mongoose.model("Order", orderSchema);
const Customer = new mongoose.model("Customer", customerSchema);

async function getCustomers(){
    // Retriving All The Data With The Order Id's replaced With Their Corresponding Data Object.
    let result = await Customer.find({}).populate("orders");    // Orders Here Specify The Data Field To Populate.
    let num = 1;
    for (customer of result){
        console.log(`\n\nCustomer No ${num} : ${customer.name}`);
        console.log(`Orders Of ${customer.name} Are As Follows : `);
        console.log(customer.orders);
        num++;
    }
};

// Defining Mongo Middlewares : 
// In Mongo We have Two Middlewares : Pre And Post
// Pre To Execute The Task Prior To The Request And Post To Execute It After The Request.

// Implementation : When We Will Delete Any Customer By DeleteAndFindById The Below Middleware Will Got Executed Directly.
//                  And It Will Also Automatically Delete All The Orders Present In It.

customerSchema.post("findOneAndDelete", async (customer) => {
    if (customer.orders.length){
        let res = await Order.deleteMany({ _id: { $in : customer.orders}});
        console.log("\nThe Following Orders Are Now Deleted : ");
        console.log(res);
    }
});

const delCust = async() => {
    let data = await Customer.findByIdAndDelete("66cac4d394e8b3acc6834918");
    console.log(data);
};

delCust();