// Response to a request coming from the packages / views
// Requiring this at the index.js main application file 
exports.respondHome = (req, res) => {
    res.render("index");

    };
exports.aboutUs = (req, res) => {
    res.render("about");
    };
exports.facilitiesItem = (req, res) => {
    res.render("facilities");
    };
    