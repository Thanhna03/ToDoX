import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required: true, //truong bat buoc
            trim: true, //neu co khoang trang se auto xoa di
        },
        status:{
            type: String,
            enum: ["active", "complete"], //chi ton tai 2 truong
            default: "active" //neu kh truyen thi mac dinh active
        },
        completedAt:{
            type: Date,
            default: null //ban dau la null nhung neu status=complete thi minh se set gia tri
        },
    },
    {
        timestamps: true, //createAt va updateAt se duoc tu dong them vao
    }
);

const Task = mongoose.model("Task", taskSchema);
export default Task;