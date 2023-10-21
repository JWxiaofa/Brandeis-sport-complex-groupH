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
    
    exports.event = (req, res) => {
        res.render("event");
        };
    exports.contact = (req, res) => {
        res.render("contact");
        };
    exports.postedContact = (req, res) => {
        const username = req.body.name; // This corresponds to the "name" field in your form
    res.render('welcome', { username: username });
    };