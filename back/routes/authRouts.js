import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import usermodel from "../models/usermodel.js";

const router = express.Router();


router.post("/register", async (req, res) => {
  try {
    const { fname, lname, email, password } = req.body;

    let user = await usermodel.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });


    const hashedPassword = await bcrypt.hash(password, 10);

    user = new usermodel({ fname, lname, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: "Server Error" });
  }
});


router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await usermodel.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid Credentials" });




    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Credentials" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "2h" });
    res.json({ token });
  } catch (error) {
    console.error(error); 
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
