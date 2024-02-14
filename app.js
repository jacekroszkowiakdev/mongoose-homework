import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

const dbConnectionString = process.env.DB_URL;
const port = process.env.PORT;

mongoose.connect(dbConnectionString);
const DB = mongoose.connection;

DB.on("error", (error) => {
    console.log(error);
});

DB.once("connected", () => {
    console.log("Database Connected");
});

const app = express();
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server Started at ${port}`);
});
