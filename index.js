const express = require("express");
const ejs = require("ejs");

// Create express app
const app = express();

// Initialize Body Parser Middleware to parse data sent by users in the request object
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse HTML form data

// Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

// routes
app.get("/", (req, res) => {
    res.render("index",);
});

app.get("/trivia", (req, res) => {
    res.render("trivia");
});

app.get("/my_fun_facts", (req, res) => {
    res.render("my_fun_facts");
});

app.get("/my_resume", (req, res) => {
    res.render("my_resume");
});

app.get("/triviaResult", (req, res) => {
    res.render("triviaResult");
});

app.post("/updatescore", (req, res) => {
    var score = 0;
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    let q1 = req.body.q1.trim();
    let q2 = req.body.q2.trim();
    let q3 = req.body.q3.trim();
    let q4 = req.body.q4.trim();
    let q5 = req.body.q5.trim();

    if (q1 == 3){
        score += 1;
        a = 1;
    };
    if (q2 == 3){
        score += 1;
        b = 1;
    };
    if (q3 == 1){
        score += 1;
        c = 1;
    };
    if (q4 == 2){
        score += 1;
        d = 1;
    };
    if (q5 == 3){
        score += 1;
        e = 1;
    };
    console.log(score);
    res.render("triviaResult", {data1: a,
    data2: b,
    data3: c,
    data4: d,
    data5: e,
    score: score
    });
});

// Setup server ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));