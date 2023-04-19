var Car = require('../models/car');

// List of all Cars
// exports.car_list = function(req, res) {
// res.send('NOT IMPLEMENTED: Car list');
// };

exports.car_list = async function (req, res) {
    try {
        theCars = await Car.find();
        res.send(theCars);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.car_view_all_Page = async function (req, res) {
    try {
        theCars = await Car.find();
        res.render('car', { title: 'Car Search Results', results: theCars });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Car.
// exports.car_detail = function (req, res) {
//     res.send('NOT IMPLEMENTED: Car detail: ' + req.params.id);
// };

// for a specific Costume.
exports.car_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Car.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// // Handle Car create on POST.
// exports.car_create_post = function (req, res) {
//     res.send('NOT IMPLEMENTED: Car create POST');
// };

exports.car_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Car();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"car_name":"Charger", "car_make":"Dodge", "car_cost":30000}
    document.car_name = req.body.car_name;
    document.car_make = req.body.car_make;
    document.car_cost = req.body.car_cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Car delete form on DELETE.
// exports.car_delete = function (req, res) {
//     res.send('NOT IMPLEMENTED: Car delete DELETE ' + req.params.id);
// };
exports.car_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Car.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Car update form on PUT.
// exports.car_update_put = function (req, res) {
//     res.send('NOT IMPLEMENTED: Car update PUT' + req.params.id);
// };

exports.car_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Car.findById(req.params.id)
        // Do updates of properties
        if (req.body.car_name)
            toUpdate.car_name = req.body.car_name;
        if (req.body.car_make) toUpdate.car_make = req.body.car_make;
        if (req.body.car_cost) toUpdate.car_cost = req.body.car_cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};



// Handle a show one view with id specified by query
exports.car_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Car.findById(req.query.id)
        res.render('cardetail',
            { title: 'Car Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a car.
// No body, no in path parameter, no query.
// Does not need to be async
exports.car_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('carcreate', { title: 'Car Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};