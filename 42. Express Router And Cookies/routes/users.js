const express = require(`express`);
const Router = express.Router();


// 01. Index Route For Users
Router.get(`/`, (req, res) => {
    res.send("INDEX Route For Users");
})

// 02. Show Route For Users
Router.get(`/:id`, (req, res) => {
    res.send("SHOW Route For Users");
})

// 03. Update Route For Users
Router.post(`/:id`, (req, res) => {
    res.send("UPDATE Route For Users");
})

// 04. Delete Route For Users
Router.delete(`/:id`, (req, res) => {
    res.send("DELETE Route For Users");
})

module.exports = Router;