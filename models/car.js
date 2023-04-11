const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
car_name: String,
car_make: String,
car_cost: Number
})
module.exports = mongoose.model("Car",
carSchema)