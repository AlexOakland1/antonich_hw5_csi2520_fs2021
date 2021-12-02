const express = require("express");
const ejs = require("ejs");

// Create express app
const app = express();

// Initialize Body Parser Middleware to parse data sent by users in the request object
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse HTML form data

// routes
app.get("/", (req, res) => {
    res.render("index");
    res.render("my_blog");
});

// Initialize ejs Middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, '/../antonich_hw5_csi2520_fs2021'), { maxAge: 86400000 }));

// Setup server ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));