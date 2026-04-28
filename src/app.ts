import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import cardRoutes from "./routes/card.routes";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/card", cardRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});