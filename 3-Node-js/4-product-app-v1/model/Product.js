

let mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var ProductSchema = new Schema({
    //id    		: ObjectId,
    name: String,
    price: Number,
    description: String,
    image: String
});


var Product = mongoose.model('Product', ProductSchema, 'Product');
module.exports = Product;