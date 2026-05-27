export const getAllTasks =(request, response)=> {
    response.status(200).send("ban co 20 viec can lam");
};

export const createTask = (req, res)=> {
    req.status(201).json({message:"Nhiem vu moi da duoc them vao thanh cong"});
};

export const updateTask =(req, res)=> {
    req.status(200).json({message:"Nhiem vu moi da duoc update thanh cong"});
};

export const deleteTask =(req, res)=> {
    req.status(200).json({message:"Nhiem vu moi da duoc xoa thanh cong"});
};