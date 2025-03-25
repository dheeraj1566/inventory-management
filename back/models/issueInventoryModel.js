import mongoose from "mongoose";

const issueInventorySchema=new mongoose.Schema({
    issueDate:Date.now(),
    name:{type:String, required:true},
    qty: {type:Number, required:true},
    department:{type:String, required:true},
    facultyname:{type:String, required:true}
},{ timestamps: true })

export default mongoose.model("issueinventory", issueInventorySchema);