const express = require("express");
const homeController = require('./controllers/homeController');
const layouts = require("express-ejs-layouts");

const app = express();
// Start the view engine and require the layouts 
app.set("view engine", "ejs");
app.use(layouts);
// utilize the static files to access the food.jpg images 
app.use(express.static("public"));

app.set("port", process.env.PORT || 8080);
// env = environmnet, can be assigned by any values, or default values
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get("/", homeController.respondHome);
// have one route, a request coming from the HTTP
app.get("/", (req, res) => {
res.send("Welcome to Brandeis Sports Complex");
});
// adding three more routes that using callback functions
app.get("/about", homeController.aboutUs);
app.get("/facilities", homeController.facilitiesItem);




// Start the server
app.listen(app.get("port"), () => {
console.log(`Server running at http://localhost:${app.get("port")}`);
});
