import inventoryEntries from "../models/inventoryEntries.js";


export const addInventory = async (req, res)=>{
    try {
        const {srno, itemname, category, qty, threshold, status} = req.body;

        let inventory = await inventoryEntries.find({})
    } catch (error) {
        
    }
}