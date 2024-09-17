import { useState } from "react";
import { TaskList } from "@/components/task/TaskList";
import { TaskForm } from "@/components/task/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleComplete = (index) => {
    const updatedTaskList = tasks.map((task, i) => {
      if (index === i) {
        task.isDone = !task.isDone;
      }
      return task;
    })
    setTasks(updatedTaskList);
  };

  const handleDelete = (index) => {
    const updatedTaskList = tasks.filter((task, i) => i !== index)
    setTasks(updatedTaskList);
  };

  const handleAdd = (taskName) => {
    const newTask = {name: taskName, isDone: false};
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 h-screen max-w-sm mx-auto">
      <TaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onComplete={handleComplete} onDelete={handleDelete} />
    </div>
  )
}

export default App
