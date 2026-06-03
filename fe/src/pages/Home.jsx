import React from "react";
import Header from "../components/Header";
import AddTask from "../components/AddTask";
import StatsAndFilter from "../components/StatsAndFilter";
import TaskList from "../components/TaskList";
import TaskListPagination from "../components/TaskListPagination";
import DateTimeFilter from "../components/DateTimeFilter";
import Footer from "../components/Footer";

const Home = () => {
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
                <AddTask/>

                {/* Thong ke va bo loc */}
                <StatsAndFilter/>

                {/* Danh sach nhiem vu */}
                <TaskList/>

                {/* Phan trang va loc theo date */}
                <div className=" flex flex-col sm:flex-row items-center justify-between gap-6">
                    <TaskListPagination/>
                    <DateTimeFilter/>
                </div>

                <Footer />
            </div>
        </div>
    </div>
  );
};

export default Home;
