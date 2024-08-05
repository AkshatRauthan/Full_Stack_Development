// Faker Is Used To Generate Fake Data
const { faker } = require(`@faker-js/faker`);

// let createRandomUser = () => {
//     return {
//         userId : faker.datatype.uuid(),           // Fake User ID
//         username : faker.internet.userName(),     // Fake User Name
//         email : faker.internet.email(),           // Fake Email
//         avatar : faker.image.avatar(),            // Fake Avatar
//         password : faker.internet.password(),     // Fake Password
//         birthdate : faker.date.birthdate(),       // Fake Bith Date
//         registeredAt : faker.date.past()          // Fake Date From Past
//     };
// }
// console.log(createRandomUser());

let getRandomUser = () => {
    return {
        id : faker.datatype.uuid(),
        username : faker.internet.userName(),
        email : faker.internet.email(),
        password : faker.internet.password(8)
    };
}

console.log(getRandomUser());