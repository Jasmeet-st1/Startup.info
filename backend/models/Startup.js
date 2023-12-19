const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema({
    SNo: {type:Number  },
    Date: {type:Date , required:true},
    StartupName: {type:String , required:true},
    IndustryVertical:{type:String },
    SubVertical: {type:String },
    CityLocation: {type:String },
    InvestorsName:{type:String },
    InvestmentType:{type:String },
    AmountInUSD: {type:String },
    Remarks: {type:String }
});

const StartUp=mongoose.model("Startup",startupSchema,"startup-db");

module.exports=StartUp;