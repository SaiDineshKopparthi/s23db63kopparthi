// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('car', { title: 'Search Results Car' });
// });

// module.exports = router;

var express = require('express');
const car_controlers= require('../controllers/car');
var router = express.Router();
/* GET costumes */
router.get('/', car_controlers.car_view_all_Page );

/* GET detail car page */
router.get('/detail', car_controlers.car_view_one_Page);

/* GET create car page */
router.get('/create', car_controlers.car_create_Page);

module.exports = router;