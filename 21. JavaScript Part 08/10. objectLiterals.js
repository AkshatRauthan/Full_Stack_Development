//                                 Object Literals

const data = {
    email: "akshatrautahn9433@gail.com",
    password: "alan@Walker",
};

const copy = { ...data,
    id: "Akshat Rauthan"
};

console.log("\n\nThe Data Object Is : \n");
console.log(data);

console.log("\n\nThe Copied And Modified Data Object Is : \n");
console.log(copy,"\n\n");