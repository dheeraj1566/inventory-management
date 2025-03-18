import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRouts.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


const corsOptions = {
  origin: [process.env.FRONTEND_URL],
  methods: "GET, POST,DELETE",
  credentials: true,
  optionsSuccessStatus : 200, 
};

app.use(cors(corsOptions)); 
app.use(express.json());


app.use("/auth", authRoutes);

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(" MongoDB Connection Error:", err));


app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
