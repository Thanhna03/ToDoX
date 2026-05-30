import Task from '../models/Task.js'

export const getAllTasks = async (req, res)=> {
    try {
        const tasks = await Task.find().sort({createdAt:"-1"});//hien thi theo khoi tao moi nhat
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Loi khi goi getAllTask", error);
        res.status(500).json({message:"Loi he thong"});
    }
   
};

export const createTask = async (req, res)=> {
   try {
    const {title} = req.body;
    const task = new Task({title});

    const newTask = await task.save();
    res.status(201).json(newTask);

   } catch (error) {
    console.error("Loi khi goi createTask", error);
    res.status(500).json({message:"Loi he thong"});
   }
};

export const updateTask = async (req, res)=> {
    try {
        const {title, status, completedAt} = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title,
                status,
                completedAt
            },
            {new : true} // tra ve du lieu sau khi update
        );

        if(!updatedTask){
            return res.status(404).json({message:"Nhiem vu khong ton tai"})
        }

        res.status(200).json(updatedTask);
    } catch (error) {
        console.error("Loi khi goi updateTask", error);
        res.status(500).json({message:"Loi he thong"});
    }
};

export const deleteTask = async (req, res)=> {
   try {
    const deleteTask = await Task.findByIdAndDelete(req.params.id);

    if(!deleteTask){
        return res.status(404).json({message:"Nhiem vu khong ton tai"});
    }

    res.status(200).json(deleteTask);

   } catch (error) {
    console.error("Loi khi goi deleteTask", error);
    res.status(500).json({message:"Loi he thong"});
   }
};