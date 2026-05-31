import "dotenv/config";
import express, { response } from "express";
import taskRoute from "./routes/taskRouters.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5001; //neu env kh cos port -> dung gia tri mac dinh 5001

const app = express();

app.use("/api/tasks", taskRoute);

connectDB().then( () => { //lien ket database -> server moi duoc chay
    app.listen(PORT, () => {
    console.log(`server dang bat dau tren cong ${PORT}`);
  });
});
