const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema({
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
    January_sales: {
        type: String,
        required: true
    },
    February_sales: {
        type: String,
        required: true
    },
    March_sales: {
        type: String,
        required: true
    },
    April_sales: {
        type: String,
        required: true
    },
    May_sales: {
        type: String,
        required: true
    },
    June_sales: {
        type: String,
        required: true
    },
    July_sales: {
        type: String,
        required: true
    },
    August_sales: {
        type: String,
        required: true
    },
    September_sales: {
        type: String,
        required: true
    },
    October_sales: {
        type: String,
        required: true
    },
    November_sales: {
        type: String,
        required: true
    },
    December_sales: {
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

const Sales = mongoose.model("sales", saleSchema);
module.exports = Sales;
