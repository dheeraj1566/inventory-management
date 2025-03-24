import mongoose from "mongoose";
import {v4 as uuidv4} from "uuid"; 

const inventorySchema = new mongoose.Schema(
  {
    srno: { type: String, unique: true, default: ()=> uuidv4() },
    itemname: { type: String, required: true },
    category: { type: String, required: true},
    qty: { type: Number, required: true },
    threshold: { type: String, required: true },
    status: { type: String, required: true, enum: ["instock", "outOfStock"] },
  },
  { timestamps: true }
);

export default mongoose.model("inventory", inventorySchema);
