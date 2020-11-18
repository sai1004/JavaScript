const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/login", (req, res, next) => {
    res.send("logged in");
    next();
});

app;

app.listen(5000, (err) => {
    if (err) {
        throw err;
    }
    console.log("server is listening on 5000");
});
