const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema({
    year:{
        type:String,
        required:true,
    },
    drug_name:{
        type:String,
        required:true,
    },
    drug_type:{
        type:String,
        required:true,
    },
    January_purchase: {
        type: String,
        required: true
    },
    February_purchase: {
        type: String,
        required: true
    },
    March_purchase: {
        type: String,
        required: true
    },
    April_purchase: {
        type: String,
        required: true
    },
    May_purchase: {
        type: String,
        required: true
    },
    June_purchase: {
        type: String,
        required: true
    },
    July_purchase: {
        type: String,
        required: true
    },
    August_purchase: {
        type: String,
        required: true
    },
    September_purchase: {
        type: String,
        required: true
    },
    October_purchase: {
        type: String,
        required: true
    },
    November_purchase: {
        type: String,
        required: true
    },
    December_purchase: {
        type: String,
        required: true
    },
    total_Quantity: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    total_price: {
        type: String,
        required: true
    }
});

const Purchase = mongoose.model("Purchase", purchaseSchema);
module.exports = Purchase;