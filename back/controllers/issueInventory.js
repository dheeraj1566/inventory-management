// import issueInventoryModel from "../models/issueInventoryModel";

export const issueInventory = async (req, res) => {

    const [name, qty, department, facultyname, ] = req.body;

    if (!name ||qty === undefined ||!department || !facultyname) {
        return res.status(400).json({ message: "All fields are required" });
      }

      
  }
  