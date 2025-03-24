import inventoryEntries from "../models/inventoryEntries.js";

export const addInventory = async (req, res) => {
  try {
    const { itemname, category, qty, threshold, status } = req.body;

    if (!itemname || !category || qty === undefined || !threshold || !status) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newItem = new inventoryEntries({
      itemname,
      category,
      qty,
      threshold,
      status,
    });

    await newItem.save();
    res.status(201).json({ message: "Inventory item added successfully", newItem });
  } catch (error) {
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
