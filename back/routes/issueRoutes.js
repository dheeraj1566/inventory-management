import express from "express";
import {issueInventory} from "../controllers/issueInventory.js";

const router = express.Router();

router.post("/inventory", issueInventory);

export default router;