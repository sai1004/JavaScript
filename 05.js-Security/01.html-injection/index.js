const express = require("express");

const app = express();

var submissions = [];

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/login", (req, res, next) => {
    if (req.body.name !== undefined && req.body.email !== undefined && req.body.password !== undefined) {
        const newSub = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        };
        submissions.push(newSub);
        res.json({ added: newSub, submissions });
    } else {
        res.status(200);
    }
    res.end();
});

app.get("/details", (req, res, next) => {
    res.json({ submissions });
    res.end();
});

app.listen(5000, (err) => {
    if (err) {
        throw err;
    }
    console.log("server is listening on 5000");
});
