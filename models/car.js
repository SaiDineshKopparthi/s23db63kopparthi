const mongoose = require("mongoose")
const carSchema = mongoose.Schema({
car_name: String,
car_make: String,
car_cost: {
    type:Number,
    min: [3000, 'Cost must be at least 3000'],
    max: [2500000000, 'Cost should not be more than 2500000000']
}
})
module.exports = mongoose.model("Car",
carSchema)