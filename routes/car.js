// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('car', { title: 'Search Results Car' });
// });

// module.exports = router;

var express = require('express');
const car_controlers = require('../controllers/car');
var router = express.Router();
/* GET costumes */
router.get('/', car_controlers.car_view_all_Page);

/* GET detail car page */
router.get('/detail', car_controlers.car_view_one_Page);

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET create car page */
router.get('/create', secured, car_controlers.car_create_Page);

/* GET create update page */
router.get('/update', secured, car_controlers.car_update_Page);

/* GET delete car page */
router.get('/delete', secured, car_controlers.car_delete_Page);

module.exports = router;