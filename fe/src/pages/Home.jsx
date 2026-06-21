import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import AddTask from "../components/AddTask";
import StatsAndFilter from "../components/StatsAndFilter";
import TaskList from "../components/TaskList";
import TaskListPagination from "../components/TaskListPagination";
import DateTimeFilter from "../components/DateTimeFilter";
import Footer from "../components/Footer";
import { toast } from "sonner";
import { FilterIcon } from "lucide-react";
import api from "../lib/axios";

const Home = () => {

    const [taskBuffer, setTaskBuffer] = useState([]);
    const [activeTaskCount, setActiveTaskCount] = useState(0);
    const [completeTaskCount, setCompleteTaskCount] = useState(0);
    const [filter, setFilter] = useState("all");


    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const res = await api.get("/tasks");
            setTaskBuffer(res.data.tasks);
            setActiveTaskCount(res.data.activeCount);
            setCompleteTaskCount(res.data.completeCount);

        } catch (error) {
            console.error("Lỗi xảy ra khi truy xuất tasks: ", error);
            toast.error("Lỗi xảy ra khi truy xuất tasks.");
        }
    };

    const handleTaskChanged = () => {
        fetchTasks();
    };

    //bien luu ds task da loc
    const filteredTasks = taskBuffer.filter((task) => {
        switch(filter){
            case "active":
                return task.status === "active";
            case "completed":
                return task.status === "complete";
            default:
                return true;
        }
    });


  return (
    <div className="min-h-screen w-full bg-white relative">
        {/* Pink Glow Background */}
        <div
            className="absolute inset-0 z-0"
            style={{
            backgroundImage: `
                radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #ec4899 100%)
            `,
            backgroundSize: "100% 100%",
            }}
        />
        <div className="container pt-8 mx-auto relative z-10">
            <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
                <Header/>

                {/* Tao nhiem vu */}
                <AddTask handleNewTaskAdded={handleTaskChanged} />

                {/* Thong ke va bo loc */}
                <StatsAndFilter
                    filter={filter}
                    setFilter={setFilter}
                    activeTasksCount={activeTaskCount}
                    completedTasksCount={completeTaskCount}

                />

                {/* Danh sach nhiem vu */}
                <TaskList 
                filteredTasks={filteredTasks} 
                filter= {filter} 
                handleTaskChange={handleTaskChanged} />

                {/* Phan trang va loc theo date */}
                <div className=" flex flex-col sm:flex-row items-center justify-between gap-6">
                    <TaskListPagination/>
                    <DateTimeFilter/>
                </div>

                <Footer                 
                    activeTasksCount={activeTaskCount}
                    completedTasksCount={completeTaskCount}
                />
            </div>
        </div>
    </div>
  );
};

export default Home;
