import express from "express";
import cors from "cors";
import morgan from "morgan";
import db from "./database/db.js";
import dotenv from "dotenv";
dotenv.config();
import postRoutes from "./routes/posts.routes.js";

const PORT = process.env.PORT;

const app = express();

db.sync({ force: false })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use("/posts", postRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
