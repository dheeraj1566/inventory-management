import express from "express";
import {addInventory, getInventory} from "../controllers/inventoryController.js";

const router =express.Router();

router.post("/inventory", addInventory);
router.get("/getTable", getInventory);

export default router;

