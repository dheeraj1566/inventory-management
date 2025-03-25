import express from "express";
import {addInventory, getInventory, updateInventoryItem} from "../controllers/inventoryController.js";

const router =express.Router();

router.post("/inventory", addInventory);
router.get("/getTable", getInventory);
router.put("/update-inventory", updateInventoryItem)

export default router;

