import 'dotenv/config';
import express, { response } from "express";
import taskRoute from './routes/taskRouters.js'
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

connectDB();

app.use("/api/tasks", taskRoute)

app.listen(5001, () => {
    console.log('server dang bat dau');
})
