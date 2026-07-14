import express from "express";
import cors from "cors";
import "dotenv/config";
import userRouter from "./routes/userRoutes.js";

import connectDB from "./config/mongodb.js";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

await connectDB();

app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("Vividly API");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
