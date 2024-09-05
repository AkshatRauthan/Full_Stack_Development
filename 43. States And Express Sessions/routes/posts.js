const express = require(`express`);
const Router = express.Router();

// 01. Index Route For Posts
Router.get(`/`, (req, res) => {
    res.send("INDEX Route For Posts");
})

// 02. Show Route For Posts
Router.get(`/:id`, (req, res) => {
    res.send("SHOW Route For Posts");
})

// 03. Update Route For Posts
Router.post(`/:id`, (req, res) => {
    res.send("UPDATE Route For Posts");
})

// 04. Delete Route For Posts
Router.delete(`/:id`, (req, res) => {
    res.send("DELETE Route For Posts");
})

module.exports = Router;