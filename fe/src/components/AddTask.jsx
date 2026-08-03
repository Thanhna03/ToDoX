import React, { useState } from 'react'
import { Card } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import { toast } from 'sonner'
import api from '../lib/axios'

const AddTask = ({ handleNewTaskAdded }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const addTask = async () => {
    if(newTaskTitle.trim()) {
      try {
        await api.post("/tasks", {title: newTaskTitle });
        toast.success("Nhiệm vụ được thêm vào thành công");
        handleNewTaskAdded();
      } catch (error) {
        console.log("Lỗi xảy ra khi thêm nhiệm vụ", error);
        toast.error("Lỗi xảy ra khi thêm nhiệm vụ mới");
      }

      setNewTaskTitle("");
    }else{
      toast.error("Bạn cần nhập nội dung của nhiệm vụ");
    }
  };

  //su kien cho khi user bam enter se addTask chu kh can press bt
  const handleKeyPress = (event) => {
    if(event.key === "Enter"){
      addTask();
    }

  };


  return (
    <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
      <div className='flex flex-col sm:flex-row gap-3'>
        <Input
          type="text"
          placeholder="Việc cần làm !"
          className="h-12 text-base bg-slate-50  sm:flex-1 border-border/50 focus:border-primary/50 focus:ring-primary/20"
          value={newTaskTitle}
          onChange={(even) => setNewTaskTitle(even.target.value)}
          onKeyPress={handleKeyPress}
        />

        <Button 
        variant="gradient" 
        size="xl" 
        className="px-6 gap-2" 
        onClick={addTask}
        disabled={!newTaskTitle.trim()}
        >
          <Plus className="size-5"/>
          Thêm
        </Button>
        
      </div>
    </Card>
  )
}

export default AddTask
