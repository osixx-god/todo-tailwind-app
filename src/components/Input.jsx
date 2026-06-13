import { useEffect, useState } from "react";

function Input({ tasks, setTasks }) {
  const [newTask, setNewTask] = useState("");
  function handleAddTask(e) {
    setNewTask(e.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      console.log("enter key pressed");
      const newT = {
        name: newTask,
        id: Date.now(),
        completed: false,
      };
      const UpdatedT = [...tasks, newT];
      setTasks(UpdatedT);
      setNewTask("");
    }
  }

  return (
    <div className="flex flex-col w-full mb-6 ">
      <input
        type="text"
        placeholder="Create a new todo..."
        value={newTask}
        onChange={handleAddTask}
        onKeyDown={handleKeyDown}
        className="text-lg rounded-sm focus:outline-none focus:ring-2 focus:ring-purple-300 w-full shadow-md z-20 bg-white p-4 flex-1 dark:bg-[#25273c] dark:text-white"
      />
    </div>
  );
}
export default Input;
