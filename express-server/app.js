// const express = require('express')
// const app = express()

const app = require("express")();

app.get("/", (req, res) => {
	res.send("<h1>Hello world</h1>");
});

app.get("/about", (req, res) => {
	res.send("welcome to my website");
});

app.listen(3000);
