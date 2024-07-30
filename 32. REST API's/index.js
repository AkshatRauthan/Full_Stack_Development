/*  CRUD => Create Read Update Delete => Basic Database Operations

The API Requests That Are Used To Perform These CRUD Operations Are : 
1. GET Request : Retrives Resources.
2. POST Request : Submits New Data To Te Server
3. PUT Request : Updates Existing Data
4. PATCH Request : Updates Existing Data Partially
5. DELETE Request : Delete Existing Data                            */

const express = require(`express`), port = 8080;
const app = express();
const path = require("path");
const {v4 : uuid} = require("uuid");
const methodOverride = require("method-override");

app.set(`view engine`, `ejs`);
app.set(`views`, path.join(__dirname, `views`));

app.use(express.static(path.join(__dirname, `public`)));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));

app.listen(port, () => {
    console.log(`\nThe App Is Listening On Port : ${port}.`);
})

app.get(`/`, (req, res) => {
    res.send(`Server Is Working Well`);
});

let posts = [
    { id : "1a", username : `rauthanAkshat`, content : `I love coding`},
    { id : uuid(), username : `alanWalker`, content : `Got my 1st Intern!!`},
    { id : uuid(), username : `rahulKumar`, content : `Hello World!!`}
]
console.log(posts);

// 01. GET => /posts => to get data for all posts  => INDEX Route
app.get('/posts', (req, res) => {
    res.render(`index.ejs`, {posts});
});

// Link Of Form To Add A New Post.
app.get('/posts/new', (req, res) => {
    res.render(`new.ejs`);
});

// 02. POST => /posts => to add a new post  => CREATE Route
app.post(`/posts`, (req, res) => {
    let {username, content} = req.body;
    posts.push({id : uuid(), username : username, content : content});
    res.redirect(`/posts`);
    console.log(posts);
});
 
// 03. GET => /posts/:id => to get one post (using its id)  => VIEW Route
app.get(`/posts/:id`, (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => p.id == id);
    res.render(`show.ejs`, post);
});

// Link Of Form To Update Posts=> EDIT Route
app.get(`/posts/:id/edit`, (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => p.id == id);
    res.render('edit.ejs', post);
});

// PATCH => /posts/:id => to update specific post  => UPDATE Route
app.patch(`/posts/:id`, (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => p.id == id);
    let newContent  = req.body.content;
    console.log(newContent);
    post.content = newContent;
    res.redirect(`/posts/${post.id}`);
});

// DELETE => /posts/:id => to delete specific post  => DESTROY Route
app.delete(`/posts/:id`, (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => p.id != id);
    res.redirect(`/posts`);
})