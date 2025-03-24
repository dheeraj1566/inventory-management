import express from "express";
import {addInventory} from "../controllers/inventoryController.js";

const router =express.Router();

router.post("/inventory", addInventory);
// inventoryRoutes.post("/editinventory", editInventorey);
// inventoryRoutes.post("/change", changeInventory);

export default router;