import 'dotenv/config';
import express, { response } from "express";
import taskRoute from './routes/taskRouters.js'
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5001 //neu env kh cos port -> dung gia tri mac dinh 5001

const app = express();

connectDB();

app.use("/api/tasks", taskRoute)

app.listen(PORT, () => {
    console.log(`server dang bat dau tren cong ${PORT}`);
})
