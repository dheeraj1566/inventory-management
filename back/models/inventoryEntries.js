import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  threshold: Number,
  status: {
    type: String,
    enum: ["Available", "Out of Stock"],
  },
});

const inventorySchema = new mongoose.Schema({
  category: String,
  items: [itemSchema], 
});

const inventoryEntries = mongoose.model("Inventory", inventorySchema);
export default inventoryEntries;
