import React from 'react'

const TaskList = () => {
  let filter = 'all';
  const filteredTasks = [
    { id: 1, 
      title: 'Task 1',
      status: 'active',
      completedAt: null,
      createdAt: new Date(),
    },
    { id: 2, 
      title: 'Task 2',
      status: 'completed',
      completedAt: new Date(),
      createdAt: new Date(),
    },
  ];

  return (
    <div>
      Task List
    </div>
  )
}

export default TaskList
 