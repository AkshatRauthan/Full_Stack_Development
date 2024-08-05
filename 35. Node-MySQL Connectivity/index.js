const mysql = require(`mysql2`);
const { faker } = require(`@faker-js/faker`);
const express = require(`express`), port = 8080;
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { connect } = require("http2");

app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, `views`));

app.use(express.static(path.join(__dirname, `public`)));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

const connection = mysql.createConnection({
    host : `localhost`,
    user : `root`,
    database : `APP`,
    password : `akshat`
});
app.listen("8080", () => {
    console.log('\n\nServer Is Listening On Port 8080\n');
});


// 01. GET/ => SHOW THE COUNT OF ALL USERS => HOME ROUTE
app.get("/", (req, res) => {
    let q = `SELECT COUNT(*) FROM USER`;
    try {
        connection.query(q, (error, result) => {
            if (error) throw error;
            else{
                res.render(`home.ejs`, {count : result[0]["COUNT(*)"]});
                console.log('\n\nData Succesfully Printed');
            }
        })
    }
    catch(error){
        throw error;
    }
});


// 02. SET/user => SHOW THE DETAILS OF ALL THE CURRENT USERS => SHOW ROUTE
app.get(`/users`, (req, res) => {
    let q = `SELECT ID, USERNAME, EMAIL FROM USER`;
    try{
        connection.query(q, (error, result) => {
            if (error) throw error;
            else {
                res.render(`showUsers.ejs`, {result});
            }
        });
    }
    catch(error){
        throw error;
    }
});
app.get('/users/:id/edit', (req, res) => {
    let {id} = req.params;
    let q = `SELECT * FROM USER WHERE ID = "${id}"`;
    try {
        connection.query(q, (error, result) => {
            if (error) throw error;
            else {
                console.log(result);
                res.render(`edit.ejs`, {result});
            }
        })
    }
    catch(error){
        throw error;
    }
});
function updateUserData(obj, Id){
    let q = `UPDATE USER SET Username = "${obj.Username}", Email = "${obj.Email}" WHERE ID = "${Id}"`
    try {
        connection.query(q, (error, result) => {
            if (error){
                throw error;
            }
            else return;
        });
    }
    catch(error){
        throw error;
    }
}


// 03. PATCH/user/:id => TO EDIT USERNAME IF PASSWORD ENTERED IS CORRECT.
app.patch(`/users/:id`, (req, res) => {
    console.log(`\nPatch request Accepted\n`);
    // res.send("Request Accepted");
    console.log(req.body);
    let {id} = req.params, password, q = `SELECT PASSWORD FROM USER WHERE ID = "${id}"`;
    try {
        connection.query(q, (error, result) => {
            if (error) throw error;
            else {
                password = result[0]["PASSWORD"];
                console.log(password);
                console.log(req.body.Password);
                if (password.toString() == req.body.Password.toString()){
                    try {
                        updateUserData(req.body, id);
                        console.log("Updated");
                        res.render(`userUpdated.ejs`, {ID : id, Email : req.body.Email, Username : req.body.Username});
                    }
                    catch(error){
                        console.log("Not Updated");
                        res.send("Not Updated");
                        throw error;
                    }
                }
                else {
                    console.log("Wrong Password");
                    res.send("Wrong Password");
                }
            }
        });
    }
    catch(error){
        throw error;
    }
});


// 04 : DELETE/users?:id => TO DELETE ACCOUNT ON REQUEST IF PASSWORD IS CORRECT
app.get(`/users/:id/delete`, (req, res) => {
    let {id} = req.params;
    res.render(`deleteUser.ejs`, {ID : id});
})
app.delete(`/users/:id`, (req, res) => {
    let {id} = req.params, password, q = `SELECT PASSWORD FROM USER WHERE ID = "${id}"`;
    try {
        connection.query(q, (error, result) => {
            if (error) throw error;
            else {
                password = result[0]["PASSWORD"];
                console.log(password);
                console.log(req.body.Password);
                if (password.toString() == req.body.Password.toString()){
                    try{
                        let q = `DELETE FROM USER WHERE ID = "${id}"`;
                        connection.query(q, (error, result) => {
                            if (error) throw error;
                            else {
                                console.log(result);
                                console.log(`User Account Deleted`);
                                res.send(`User Account Deleted`);
                            }
                        });
                    }
                    catch(error){
                        throw error;
                    }
                }
                else{
                    console.log('Incorrect Passsword');
                    res.send(`Incorrect Password`);
                }
            }
        })
    }
    catch(error){
        throw error;
    }
});


// 05 : PATCH/users/new => TO ADD NEW USER TO THE APP
app.get(`/users/createnewuser`, (req, res) => {
    res.render(`newUser.ejs`);
});
app.post(`/users/new`, (req, res) => {
    let id = faker.string.uuid(), data = req.body;
    let q = `INSERT INTO USER VALUES ("${id}", "${data.Username}", "${data.Email}", "${data.Password}")`;
    try {
        connection.query(q, (error, result) => {
            if (error) throw error;
            else {
                console.log(`User Added`);
                res.send('User Added');
            }
        });  
    }
    catch(error){
        throw error;
    }
});