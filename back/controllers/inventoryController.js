import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid"; 
import inventoryEntries from "../models/inventoryEntries.js"; 

export const addInventory = async (req, res) => {
  try {
    const { name, category, qty, threshold } = req.body;

    if (!name || !category || qty === undefined || threshold === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const status = qty > threshold ? "Available" : "Out of Stock";

    let existingCategory = await inventoryEntries.findOne({ category });

    if (existingCategory) {

      await inventoryEntries.updateOne(
        { category }, 
        { 
          $push: { items: { name, qty, threshold, status } }
        }
      );
      res.status(200).json({ message: "Item added to existing category" });
    } else {

      const newCategory = new inventoryEntries({
        category,
        items: [{ name, qty, threshold, status }],
      });

      await newCategory.save();
      res.status(201).json({ message: "New category created with item", newCategory });
    }
  } catch (error) {
    console.error("Error in addInventory:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const getInventory = async (req, res) => {
  try {
    const inventoryList = await inventoryEntries.find();
    res.status(200).json(inventoryList);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
